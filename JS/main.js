function tocarSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio' ){
        elemento.play(seletorAudio);
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const IdInstrumento = `#som_${instrumento}`;//tamplate String

    tecla.onclick = function(){
        tocarSom(IdInstrumento)
    };

    tecla.onkeydown = function(evento){

        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');    
    }

}
