audio = document.getElementById("audio");

    function IniciarPausar(){
		if (cancion.paused) {
			cancion.play();
		}else{
			cancion.pause();
		}
	}

let bienvenidos = document.getElementById('bienvenidos');

bienvenidos.onmouseover = function(){
	bienvenidos.style.textDecoration = 'none';
};

bienvenidos.onmouseout = function(){
	bienvenidos.style.textDecoration = 'line-through';
};


