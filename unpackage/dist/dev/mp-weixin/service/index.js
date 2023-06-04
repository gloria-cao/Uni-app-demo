"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 6e4;
const BASE_URL = "http://152.136.185.210:7878/api/hy66";
class CQRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data,
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, params) {
    return this.request(params);
  }
}
const CQRequest$1 = new CQRequest();
exports.CQRequest = CQRequest$1;
