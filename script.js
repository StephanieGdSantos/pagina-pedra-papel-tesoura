console.log('aaa')

function CheckDevice(){
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        swal({
            title: "Jogo Indisponível",
            text: "Infelizmente o dispositivo não atende aos requisitos para a instalação do jogo.",
            icon: "error"
          });
     }
    else {
       window.location.href = 'https://github.com/StephanieGdSantos/PedraPapelTesoura/raw/main/JogoPPT/bin/Debug/PedraPapelOuTesoura.exe'
     }
}