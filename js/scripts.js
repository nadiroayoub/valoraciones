'use strict'
/**Variables */
const nombreCliente = document.querySelector(".nombre-cliente");
const cardValoraciones = document.querySelectorAll('.card__valoraciones');

/* Agregar el nuevo elemento en la carta */
    // Obtener nombres de los clientes
function obtenerClientes(){
    const archivo = '../datos/clientes.json'
    fetch(archivo)
        .then(resultado => resultado.json())
        .then( datos => {
            
            const {clientes} = datos
            var i = 0;
            clientes.forEach((index, cliente) => {
                    cardValoraciones[i].querySelector('.nombre-cliente').textContent = cliente.nombre;
                    i++;
                    
            });
        })
        .catch(error => {
            console.log('Un error detectado: ' + error);
        })
}
obtenerClientes();

/**Dar funcionalidades al boton util */

const botonUtil = document.querySelectorAll(".btn");
const spanCuantasPersonas = document.querySelectorAll('.card__valoraciones-cuantas');
console.log(spanCuantasPersonas);

/**Añadir estilos al boton cuando se pulsa */
botonUtil.forEach((btn) => {
    btn.addEventListener('click', function(){
        this.style.backgroundColor = "#359435";
        this.style.color = "#fff";
        this.style.border = "none";
        if(!btn.classList.contains('clicked')){
            spanCuantasPersonas.textContent ++;
        }
        btn.classList.add('clicked');
    })   
});

