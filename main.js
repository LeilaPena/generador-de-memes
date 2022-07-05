// Botones para paneles de texto e imagen-----------------------------------------------------------------------
const panelTexto = document.getElementById('panel-texto');
const panelImagen = document.getElementById('panel-imagen');
const botonPanelImagen= document.getElementById('boton-panel-imagen');
const botonPanelTexto = document.getElementById('boton-panel-texto');

botonPanelImagen.addEventListener('click',()=>{
    panelImagen.style.display= 'inline-block';
    panelTexto.style.display='none';
})
botonPanelTexto.addEventListener('click',()=>{
    panelTexto.style.display='inline-block';
    panelImagen.style.display='none';
})
// Botones para cartel de top text y bottom text------------------------------------------------------------------
const textoSuperior= document.getElementById('texto-superior')
const textoInferior= document.getElementById('texto-inferior')
const checkboxSinTextoSuperior= document.getElementById('checkbox-sin-texto-superior')
const checkboxSinTextoInferior= document.getElementById('checkbox-sin-texto-inferior')
const checkboxFondoTransparente= document.getElementById('checkbox-fondo-transparente')
checkboxSinTextoSuperior.addEventListener('click',()=>{
    if (checkboxSinTextoSuperior.checked){
        textoSuperior.style.display= 'none';
    }
    else{
        textoSuperior.style.display='inline-block';
    }
})
checkboxSinTextoInferior.addEventListener('click',()=>{
    if (checkboxSinTextoInferior.checked){
        textoInferior.style.display= 'none';
    }
    else{
        textoInferior.style.display='inline-block';
    }
})
checkboxFondoTransparente.addEventListener('click',()=>{
    if (checkboxFondoTransparente.checked){
        textoInferior.style.visibility='hidden';
        textoSuperior.style.visibility= 'hidden';
    }
    else{
        textoInferior.style.visibility='visible';
        textoSuperior.style.visibility='visible';
    }
})
// Input para ingresar URL
const inputURL=document.getElementById('input-url');
const cuadradoImagen= document.getElementById('cuadrado-imagen')
inputURL.addEventListener('input',event =>{
const urlImagen= event.target.value;
cuadradoImagen.style.backgroundImage=`url("${urlImagen}")`;

})

//Input range para estilar imagen meme---------------------------------------------------------------------------
// Brillo
const pointsBrillo = document.getElementById('points-brillo');
pointsBrillo.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `brightness(${valorActual})`;
   })

// Opacidad
const pointsOpacidad = document.getElementById('points-opacidad');  
pointsOpacidad.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `opacity(${valorActual})`;
   })

// Contraste
const pointsContraste = document.getElementById('points-contraste');  
pointsContraste.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `contrast(${valorActual}%)`;
   })

// Desenfoque
const pointsDesenfoque = document.getElementById('points-desenfoque');  
pointsDesenfoque.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `blur(${valorActual}px)`;
   })

// Escala de grises
const pointsGrises = document.getElementById('points-grises');  
pointsGrises.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `grayscale(${valorActual}%)`;
   })

// Sepia
const pointsSepia = document.getElementById('points-sepia');  
pointsSepia.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `sepia(${valorActual}%)`;
   })

// HUE
const pointsHUE = document.getElementById('points-hue');  
pointsHUE.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `hue-rotate(${valorActual}deg)`;
   })

// Saturado
const pointsSaturado = document.getElementById('points-saturado');  
pointsSaturado.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `saturate(${valorActual}%)`;
   })

// Negativo
const pointsNegativo = document.getElementById('points-negativo');  
pointsNegativo.addEventListener('input', (event) => {
    const valorActual = event.target.value;
    cuadradoImagen.style.filter = `invert(${valorActual})`;
   })

//Input Restablecer filtros--------------------------------------------------------------------------------------
const botonRestablecerFiltros = document.getElementById('boton-restablecer-filtros')
botonRestablecerFiltros.addEventListener('click',()=>{
    pointsBrillo.value= 1;
    cuadradoImagen.style.filter = `brightness(1)`;
    pointsOpacidad.value= 1;
    cuadradoImagen.style.filter = `opacity(1)`;
    pointsContraste.value= 100;
    cuadradoImagen.style.filter = `contrast(1%)`;
    pointsDesenfoque.value= 0;
    cuadradoImagen.style.filter = `blur(0px)`;
    pointsGrises.value= 0;
    cuadradoImagen.style.filter = `grayscale(1%)`;
    pointsSepia.value= 0;
    cuadradoImagen.style.filter = `sepia(0%)`;
    pointsHUE.value= 0;
    cuadradoImagen.style.filter = `rotate(0deg)`;
    pointsSaturado.value= 100;
    cuadradoImagen.style.filter = `saturation(100%)`;
    pointsNegativo.value= 0;
    cuadradoImagen.style.filter = `invert(1)`;
})