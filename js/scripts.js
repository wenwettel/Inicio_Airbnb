

document.addEventListener('DOMContentLoaded', () => {

//Boton flotante en el footer
    const btnFLotante= document.querySelector('.btn-flotante');
    btnFLotante.addEventListener('click', (e) => {
        e.preventDefault();
        
        //Para agregar y quitar la clase
        const footer = document.querySelector('#footer');

        //revisa si el footer contiene esta clase
        if (footer.classList.contains('activo') ) {

            //si lo contiene ejecuta este codigo
            footer.classList.remove('activo');
            btnFLotante.classList.remove('activo')


            //cambiar el texto
            btnFLotante.innerText = 'Idioma y Moneda';

            

        } else {
            //sino lo contiene quiero que agregue la clase, al footer y al enlace btn
            footer.classList.add('activo') ; 
            btnFLotante.classList.add('activo')

            //cambiar el texto
            btnFLotante.innerText = 'X Cerrar';
        }
        
    });

});

/*Animar la imagen del hero*/

const imagenHero = document.querySelector('.hero');

//Inicializar las variables

//incrementar
let i = 0;

//tiempo
let tiempo = 0; 

//Array con imagenes para el fondo
const imagenes = ['arriba2.jpg', 'arriba.jpg' ];

setInterval( () => {
    imagenHero.style.backgroundPositionY = '-'+tiempo+'px'; /*negativo para q incie de abajo hacia arriba, positivo la inversa */

    if(tiempo >= 48) {
        tiempo = 0;

        //cambiar imagen de fondo
        imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";

        if(i === imagenes.length - 1) {
            i = 0;
        }else {
            i++;
        }
      
    }
      tiempo++;

}, 120);