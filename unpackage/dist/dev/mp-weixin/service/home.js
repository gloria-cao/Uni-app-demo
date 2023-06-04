"use strict";
const service_index = require("./index.js");
const getHomeMultidata = () => {
  return service_index.CQRequest.get("/home/multidata", {});
};
exports.getHomeMultidata = getHomeMultidata;
