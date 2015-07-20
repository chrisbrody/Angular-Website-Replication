app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books!';
  $scope.promo = "promo code";

  $scope.products = [
  	{
  		name: 'The Book of Trees',
  		price: 19,
  		pubdate: new Date('2014', '03', '08'),
  		cover: 'img/img1.jpg',
      likes: 0
  	},
  	{
  		name: 'Program or be Programmed',
  		price: 8,
  		pubdate: new Date('2013', '08', '01'),
  		cover: 'img/img2.jpg',
      likes: 0
  	}
  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
 

}]);

app.controller('crtl2', 
['$scope', function($scope) {

  $scope.name = 'Chris Brody';

}]);

app.controller('ctrl3', ['$scope', function($scope) {
  $scope.program = {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  }
}]);

app.controller('ctrl4', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };
}]);  