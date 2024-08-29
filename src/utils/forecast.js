const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=284f334f688bfdd999f9eb5902b2ffda&query=${
    (latitude, longitude)
  }`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to weather service");
    } else if (body.error) {
      callback("unable to find location");
    } else {
      const data = body.current;

      callback(
        undefined,
        "it is currently " +
          data.temperature +
          " degrees but it feels like " +
          data.feelslike +
          " degrees out"
      );
    }
  });
};

module.exports = forecast;
