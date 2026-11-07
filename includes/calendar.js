// Helpers compartidos por las tablas silver para que todas expongan las mismas columnas de calendario.

// Zona horaria del usuario. America/Mexico_City no tiene horario de verano desde 2022 (UTC-6 fijo).
const LOCAL_TZ = "America/Mexico_City";

// Columnas de semana, mes y día de la semana a partir de una expresión DATE en hora local.
function dateColumns(dateExpr, weekColumn, monthColumn) {
  // extract(dayofweek) empieza en domingo = 1; se pasa a ISO (lunes = 1).
  const isoOffset = `mod(extract(dayofweek from ${dateExpr}) + 5, 7)`;
  return `
  date_trunc(${dateExpr}, week(monday)) as ${weekColumn},
  date_trunc(${dateExpr}, month) as ${monthColumn},
  ${isoOffset} + 1 as day_of_week_local,
  ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'][offset(${isoOffset})] as day_name_local,
  extract(dayofweek from ${dateExpr}) in (1, 7) as is_weekend`;
}

// Franja del día a partir de una expresión DATETIME local. Mismos cortes que silver.exercise_cycling.
function timeOfDay(datetimeExpr) {
  return `case
    when extract(hour from ${datetimeExpr}) < 6 then 'Madrugada'
    when extract(hour from ${datetimeExpr}) < 12 then 'Mañana'
    when extract(hour from ${datetimeExpr}) < 19 then 'Tarde'
    else 'Noche'
  end`;
}

module.exports = { LOCAL_TZ, dateColumns, timeOfDay };
