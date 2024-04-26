let text = document.getElementById('text');
let Btn = document.getElementById('SpeechBtn');

function TextToSpeech(txt){
    let speech = new SpeechSynthesisUtterance(txt);

    speechSynthesis.speak(speech);
}

Btn.addEventListener("click",()=>{
    if(text.value !==""){
        TextToSpeech(text.value);
    }
})
