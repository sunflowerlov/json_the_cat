const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {
    const data = JSON.parse(body);

    // if (data[0]) {
    //   console.log(data[0].description);
    // } else {
    //   console.log("breed not found");
    // }

    if (error) {
      console.log("error:", error); // Print the error if one occurred
      callback(error, undefined)
    } else if (data.length === 0) {
      callback(true, undefined)
    } else {
      const desc = data[0].description;
      callback(error, desc)
    }


  });
};

module.exports = { fetchBreedDescription };
