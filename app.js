var app = angular.module('kittenator', ['ngAnimate']);

app.controller('KittenController', function ($scope) {

  var getUrl = function () {
    // TODO: find a placeholder service with more random images
    return 'http://lorempixel.com/200/200/cats?c=' + new Date().getTime();
  };

  // Load first kitten
  $scope.kittens = [getUrl()];

  $scope.loadMore = function () {
    $scope.kittens.push(getUrl());
  };
});