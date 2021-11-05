const typed = new Typed('.typed', {
    strings: ['<i class="texto"> Caso de un incendio ocurrido en VES</i>', '<i class="texto">Aplicación para no generar un incendio</i>'],
    stringsElement: '#cadenas-texto', //Va buscar en las cadenas de texto para mostrar
    typeSpeed: 30, //el tiempo de escritura de cada letra
    startDelay: 100, //el tiempo demorara iniciar la pagina al cargar
    backSpeed: 75, //tiempo borrar las letras
    smartBackspace: true, //Eliminar las palabras que sean nuevas en una cadena de texto
    surfle: false, //alterar orden palabras
    backDelay: 300, //el tiempo va borrar al cambiar de string para atras
    loop: true, //se repita como bucle
    loopCount: false, //Nos da la cantidad de veces se repita
    showCursor: true, //Mostrar el cursor palpitando
    cursorChar: "/", //El cursor que se muestre esa forma
    contentType: "html" //QUe nos permite escribir codigo html
})