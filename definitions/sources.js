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

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_daily_readiness",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/daily_readiness/, hive partitioning year/month) con el puntaje diario de readiness exportado de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_daily_hrv",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/daily_hrv/, hive partitioning year/month) con la variabilidad de frecuencia cardiaca diaria exportada de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_daily_resting_heart_rate",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/daily_resting_heart_rate/, hive partitioning year/month) con la frecuencia cardiaca en reposo diaria exportada de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_daily_respiratory_rate",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/daily_respiratory_rate/, hive partitioning year/month) con la frecuencia respiratoria diaria exportada de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_daily_spo2",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/daily_spo2/, hive partitioning year/month) con la saturación de oxígeno (SpO2) diaria exportada de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_sleep_score",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/sleep_score/, hive partitioning year/month) con el puntaje de sueño por sesión exportado de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_cardio_acwr",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/cardio_acwr/, hive partitioning year/month) con el ratio de carga aguda/crónica (ACWR) diario exportado de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_cardio_load",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/cardio_load/, hive partitioning year/month) con la carga cardiovascular por minuto exportada de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_daily_heart_rate_zones",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/daily_heart_rate_zones/, hive partitioning year/month) con las zonas de frecuencia cardiaca diarias (array zones) exportadas de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_exercise_details",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/exercise_details/, hive partitioning year/month) con el detalle por sesión de ejercicio (tracker, autodetección) exportado de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_gps_location",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/gps_location/, hive partitioning year/month) con las ubicaciones GPS por segundo exportadas de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_live_pace",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/live_pace/, hive partitioning year/month) con el ritmo (pace) en vivo por segundo exportado de Google Health.",
});

declare({
  database: "proyecto-personal-454101",
  schema: "bronze",
  name: "raw_heart_rate_exercise",
  description: "Tabla externa (NDJSON en gs://raw_fit_healt/heart_rate_exercise/, hive partitioning year/month) con la frecuencia cardiaca durante ejercicio exportada de Google Health.",
});
