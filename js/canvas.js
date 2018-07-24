			function backstar() {
	var canvas = document.getElementById('backstar');
	var ctx = canvas.getContext('2d');
	
	
	for(int i=10000;i>0;i--){
	var radgrad=ctx.createRadialGradient(45,45,12,35,35,30)
	radgrad.addColorStop(0,'#FF5F98');
	radgrad.addColorStop(0.75,'#FF0188');
	radgrad.addColorStop(1,'rgba(255,1,136,0)');
	ctx.fillStyle=radgrad;
	ctx.fillRect(0,0,150,150);
	}
	
}