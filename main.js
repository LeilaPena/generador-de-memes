// Botones para paneles de texto e imagen
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
// Botones para cartel de top text y bottom text
const textoSuperior= document.getElementById('texto-superior')
const textoInferior= document.getElementById('texto-inferior')
const botonSinTextoSuperior= document.getElementById('boton-sin-texto-superior')
const botonSinTextoInferior= document.getElementById('boton-sin-texto-inferior')
const fondoTransparenteInput= document.getElementById('fondo-transparente-input')
botonSinTextoSuperior.addEventListener('click',()=>{
    if (botonSinTextoSuperior.checked){
        textoSuperior.style.display= 'none';
    }
    else{
        textoSuperior.style.display='flex';
    }
})
botonSinTextoInferior.addEventListener('click',()=>{
    if (botonSinTextoInferior.checked){
        textoInferior.style.display= 'none';
    }
    else{
        textoInferior.style.display='flex';
    }
})
fondoTransparenteInput.addEventListener('click',()=>{
    if (fondoTransparenteInput.checked){
        textoInferior.style.display='none';
        textoSuperior.style.display= 'none';
    }
    else{
        textoInferior.style.display='flex';
        textoSuperior.style.display='flex';
    }
})