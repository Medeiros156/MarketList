
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent



var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0;' ;
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 10;



button.onclick = function() {
  recognition.start();
  console.log('Ready to receive a command.');
  button.classList.remove('redButton')
  button.classList.add('greenButton')
  
  
  
}

recognition.onresult = function(event) {
  var data = event.results[0][0].transcript;
  var speech = data.split(" ");
  console.log('Confidence: ' + event.results[0][0].confidence);
  console.log(speech);
  addToList(prepositionsLogic(speech))
  
}

recognition.onspeechend = function() {
  button.classList.remove('greenButton')
  button.classList.add('redButton')
  recognition.stop();
}

recognition.onnomatch = function(event) {
  button.classList.remove('greenButton')
  button.classList.add('redButton')
  diagnostic.textContent = "Didn't understand";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error: ' + event.error;
}



