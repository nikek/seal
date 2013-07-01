/*
 * Serve content over a socket
 */

module.exports = function (socket) {



	socket.emit('send:name', {
		name: 'Bob'
	});

	socket.on('buttonClicked', function(){
		socket.emit('delta', {
			name: 'Rogek',
			data: "hej!"
		});
	});


	setInterval(function () {
		socket.emit('send:time', {
			time: (new Date()).toString()
		});
	}, 1000);
};
