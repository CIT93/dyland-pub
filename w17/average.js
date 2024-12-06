export const calculateAverageFootprint = (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return 0;
  }

  // Filter valid entries and sum totalPoints
  const validEntries = data.filter(
    (entry) => entry && typeof entry.totalPoints === "number"
  );
  const totalPointsSum = validEntries.reduce(
    (sum, entry) => sum + entry.totalPoints,
    0
  );

  // Return the average (or 0 if no valid entries)
  return validEntries.length > 0
    ? (totalPointsSum / validEntries.length).toFixed(2)
    : 0;
};