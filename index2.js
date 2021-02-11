const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const date = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${date} for ${Math.round(pass.duration / 60)} minutes and ${pass.duration % 60} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
