declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_sleep",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/sleep/, hive partitioning year/month) con sesiones de sueño de Fitbit/Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_exercise",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/exercise/, hive partitioning year/month) con sesiones de ejercicio de Fitbit/Google Health.",
});
