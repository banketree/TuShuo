var app = {
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
		if (navigator.camera) {
			var btnCamera = document.getElementById('btn_camera');
			btnCamera.innerText = '拍照';
			console.log(navigator.camera);
			btn_camera.addEventListener('click', function(){
alert(navigator.camera);
				btnCamera.innerText = '拍照中';
				navigator.camera.getPicture(function(imageURI) {
					document.getElementById('photo_image').src = imageURI;
				},
				function(message) {
					alert('Failed because: ' + message);
				},
				{
					quality: 50,
					destinationType: Camera.DestinationType.FILE_URI
				});
			}, false);
		}
	},
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
	        var listeningElement = parentElement.querySelector('.listening');
        	var receivedElement = parentElement.querySelector('.received');

	        listeningElement.setAttribute('style', 'display:none;');
        	receivedElement.setAttribute('style', 'display:block;');
		console.log('Received Event: ' + id);
	}
};

	app.initialize();
