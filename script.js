
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent



var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
  // This code is provided as a demonstration of possible capability. You may choose not to use it.
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0;' ;
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 10;

var diagnostic = document.querySelector('.output');

var hints = document.querySelector('.hints');
var listBox = document.querySelector('.listBox');
var bg = document.querySelector('html');


button.onclick = function() {
  recognition.start();
  console.log('Ready to receive a command.');
  bg.style.backgroundColor = "green";

  
}

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var data = event.results[0][0].transcript;
  var speech = data.split(" ");
  diagnostic.textContent = 'Result received: ' + speech + '.';
  console.log('Confidence: ' + event.results[0][0].confidence);
  console.log(event);
  console.log(data);
  console.log(typeof(speech));
  console.log(speech);

  bg.style.backgroundColor = "red";
  addToList(speech)
  /* createList(speechList) */
  
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "Didn't understand";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}


