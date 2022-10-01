function tocarSom(idAudio){
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const IdInstrumento = `#som_${instrumento}`;//tamplate String

    tecla.onclick = function(){
        tocarSom(IdInstrumento)
    };

}
