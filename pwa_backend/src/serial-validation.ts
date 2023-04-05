export const deserialize_serial = async (serial: string) => {
  const s = serial?.split(/[\D]+/).filter((e) => e);

  if (s.length !== 4) return false;

  for (const key in s) {
    if (!Number.isInteger(parseInt(s[key]))) return false;
  }

  if (parseInt(s[0]) !== 1) return false;

  return {
    mesa_sala_id: parseInt(s[1]),
    grado_id: parseInt(s[2]),
    numero_identificacion_empleado: parseInt(s[3]),
  };
};
