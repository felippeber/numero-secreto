const elemetoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript

    exibeChuteNaTela(chute)
}

function exibeChuteNaTela(chute) {
    elemetoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}