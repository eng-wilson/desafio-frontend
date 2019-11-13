import axios from "axios";
import CryptoJS from "crypto-js";
import $ from "jquery";

var url = "https://weather-ydn-yql.media.yahoo.com/forecastrss";
var method = "GET";
var app_id = "ju7y5636";
var consumer_key =
  "dj0yJmk9VkFlSFZqTnFueVVHJmQ9WVdrOWFuVTNlVFUyTXpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWY5";
var consumer_secret = "e3c9bded841f77f152e9d44de989cdbda2c13ce2";
var concat = "&";
var query = { location: "aracaju,br", format: "json" };
var oauth = {
  oauth_consumer_key: consumer_key,
  oauth_nonce: "%2286cAhsfL3gObCxawgIoDVROlDDL82CVJ",
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
  oauth_version: "1.0"
};

var merged = {};
$.extend(merged, query, oauth);
// Note the sorting here is required
var merged_arr = Object.keys(merged)
  .sort()
  .map(k => {
    return [k + "=" + encodeURIComponent(merged[k])];
  });
var signature_base_str =
  method +
  concat +
  encodeURIComponent(url) +
  concat +
  encodeURIComponent(merged_arr.join(concat));

var composite_key = encodeURIComponent(consumer_secret) + concat;
var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
// var signature = hash.toString(CryptoJS.enc.Base64);
var signature = "%2FvE2epPGyX%2BTDX3MiKSQQEXQ8xQ%3D";

oauth["oauth_signature"] = signature;
var auth_header =
  "OAuth " +
  Object.keys(oauth)
    .map(k => {
      return [k + '="' + oauth[k] + '"'];
    })
    .join(", ");

// $.ajax({
//   url: url + "?" + $.param(query),
//   headers: {
//     Authorization: auth_header,
//     "X-Yahoo-App-Id": app_id
//   },
//   method: "GET",
//   success: function(data) {
//     console.log(data);
//   }
// });

const api = axios.create({
  baseURL: "https://weather-ydn-yql.media.yahoo.com",
  headers: {
    Authorization:
      'OAuth oauth_consumer_key="dj0yJmk9VkFlSFZqTnFueVVHJmQ9WVdrOWFuVTNlVFUyTXpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWY5", oauth_nonce="%2286cAhsfL3gObCxawgIoDVROlDDL82CVJ", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1573676287", oauth_version="1.0", oauth_signature="%2FvE2epPGyX%2BTDX3MiKSQQEXQ8xQ%3D"',
    "X-Yahoo-App-Id": app_id
  }
});

export default api;
