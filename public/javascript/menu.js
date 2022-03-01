$(document).ready(main);

var contador = 1;

function main(){
	$('.menu-bar').click(function(){

		if(contador == 1){
            $('nav').animate({
                left: '0',
                with: '100%'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
	});
};