let recognition = null;

function checkCompatibillity() {
    try {
        recognition = new SpeechRecognition();

        recognition.lang = 'en';
        recognition.maxAlternatives = 3;
    } catch (e) {
        console.log('Cannot support speech api in this browser');
    }
}

window.addEventListener('load', checkCompatibillity);
