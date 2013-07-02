/*
 * Serve content over a socket
 */


var socketClient = {

	add: function (socket) {

		console.dir(this.clients().length);

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
	},

	remove: function(data) {
		console.dir(data);
	}
};



module.exports = socketClient;