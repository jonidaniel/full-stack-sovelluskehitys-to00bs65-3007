const { format } = require("date-fns");

const getDate = () => {
  return new Date();
};
const formatDate = (myFormat) => {
  return format(new Date(), myFormat);
};

module.exports = { getDate, formatDate };
