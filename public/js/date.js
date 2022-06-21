//jshint: esversion:6

// Used for exporting named functions. Current implementation exports anonymous functions
// exports.getDate = getDate;
// exports.getDay = getDay;

exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return today.toLocaleDateString("en-US", options);
}

exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "long"
  }

  return today.toLocaleDateString("en-US", options);
}
