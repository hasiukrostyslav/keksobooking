'use strict';

var arrayLength = 8;
var titels = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде',
];
var prices = {
  min: 1000,
  max: 1000000,
};
var types = ['palace', 'flat', 'house', 'bungalo'];
var rooms = {
  min: 1,
  max: 5,
};
var guests = {
  min: 1,
  max: 5,
};
var time = ['12:00', '13:00', '14:00'];
var features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
var photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
var mainAxis = {
  minX: 25,
  maxX: 1150,
};
var crossAxis = {
  minY: 130,
  maxY: 630,
};

// Create avatars array
var getAvatarArr = function (length) {
  var avatar = [];
  for (var i = 1; i <= length; i++) {
    avatar.push('img/avatars/user0' + i + '.png');
  }
  return avatar;
};

var avatars = getAvatarArr(arrayLength);

// Shuffle an array at random
// var getShuffleArray = function (length) {
//   var newArray = [];
//   for(var i =0; i < length; i++){

//   }
// };

// Get random number from min to max
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
