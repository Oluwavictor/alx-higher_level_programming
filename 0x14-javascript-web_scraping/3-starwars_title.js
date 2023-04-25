#!/usr/bin/node

const request = require('request');
const episode_num = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' +  episode_num;

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
