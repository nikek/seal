
'use strict';

/* Controllers */

function AppCtrl($scope, socket) {
  socket.on('send:name', function (data) {
    $scope.name = data.name;
  });
}

function MyCtrl1($scope, socket) {
  socket.on('send:time', function (data) {
    $scope.time = data.time;
  });
}
MyCtrl1.$inject = ['$scope', 'socket'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function Feed($scope, socket) {
	$scope.news = "Inget än";

	$scope.getNews = function() {
		console.log("button is clicked!");
		socket.emit('buttonClicked');
	};

	socket.on('delta', function(data){
		$scope.news = data.name + ": " + data.data;
	});
}
Feed.$inject = ['$scope', 'socket'];

