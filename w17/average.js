export const calculateAverageFootprint = (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return 0;
  }

  const validEntries = data.filter(
    (entry) => entry && typeof entry.totalPoints === "number"
  );
  const totalPointsSum = validEntries.reduce(
    (sum, entry) => sum + entry.totalPoints,
    0
  );

  return validEntries.length > 0
    ? (totalPointsSum / validEntries.length).toFixed(2)
    : 0;
};