// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('64.46.11.1411', (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coords:' , data);
// });

// const { fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({ latitude: 49.2462, longitude: -123.108 }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned pass times:' , data);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const pass of passTimes) {
    const date = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${date} for ${Math.round(pass.duration / 60)} minutes and ${pass.duration % 60} seconds!`);
  }
});
