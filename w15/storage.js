const saveLS = (...dataSet) => {
  const serializedArr = JSON.stringify(dataSet.flat());
  localStorage.setItem("cfp", serializedArr);
};

const getLS = () => {
  const retrievedArr = localStorage.getItem("cfp");
  if (retrievedArr !== null) {
    return JSON.parse(retrievedArr);
  } else {
    return [];
  }
};
const cfpData = getLS();

export { cfpData, saveLS, getLS };