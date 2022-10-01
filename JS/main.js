function tocarSom(idAudio){
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;
while ( i < listaDeTeclas.length){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    //tamplate String
    const IdInstrumento = `#som_${instrumento}`

    tecla.onclick = function(){
        tocarSom(IdInstrumento)
    };

    console.log(i);
    i++;
}