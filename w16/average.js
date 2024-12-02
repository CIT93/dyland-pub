export const calculateAverageFootprint = (data) => 
  Array.isArray(data) && data.length > 0
    ? (
        data
          .filter((obj) => obj && typeof obj.totalPoints === "number") // Exclude invalid entries
          .reduce((sum, obj) => sum + obj.totalPoints, 0) / data.length
      ).toFixed(2)
    : 0;