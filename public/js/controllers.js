
'use strict';

/* Controllers */

function AppCtrl($scope, socket) {
  socket.on('send:name', function (data) {
    $scope.name = data.name;
    $scope.teams = [
    	{name:'St. Petersburg National Research University of IT, Mechanics and Optics', mode:1}, 
    	{name:'Royal Institute of Technology Sweden', mode:1},
    	{name:'Saratow state university', mode:'tweet'}
    	];
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

