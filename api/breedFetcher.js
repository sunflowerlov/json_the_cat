const request = require('request');


const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body.length); // Print the HTML for the Google homepage

    const data = JSON.parse(body);
    if (error) {
      callback(error, undefined)
      return
    }
    else if (data.length === 0) {
      callback(true, undefined)
      return
    }
    else {
      const desc = data[0].description;
      callback(error, desc)
    }
    

    // console.log(data);
    // console.log(typeof data);
  });

};




// console.log(args)
module.exports = { fetchBreedDescription };