const divEl = document.querySelector('.contenedor__form')
console.log(divEl)
divEl.innerHTML = `
<h2 class="h2__contacto">Contacto</h2>
<form action="#">
            <label for="nombre" class="label__contact">
                NOMBRE
                <input type="text" name="nombre">
            </label>
            <label for="email" class="label__contact" >
                EMAIL
                <input type="email" name="email" class="email">
            </label>
            <label for="text" class="label__msj">
                MENSAJE
                <input type="text" name="text">
            </label>
        <button class="boton__contact">Enviar</button>
        </form>
`