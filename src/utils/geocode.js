const request = require("request");

const geocode = (address, callback) => {
  const url =
    `https://api.mapbox.com/search/geocode/v6/forward?q=` +
    encodeURIComponent(address) +
    `&worldview=cn&access_token=pk.eyJ1IjoiamFtZXNydGMwIiwiYSI6ImNtMDQ3MmVpMTA2cnUyanM0MmRvM2puYWUifQ.bhijM8QPLfFKic9GbolrYw&limit=1`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to location service. Try another search");
    } else if (body.features.length === 0) {
      callback("unable to find location");
    } else {
      const data = body.features[0].properties.coordinates;
      const latitude = data.latitude;
      const longitude = data.longitude;
      const location = body.features[0].properties.full_address;
      callback(undefined, { latitude, longitude, location });
    }
  });
};

module.exports = geocode;
