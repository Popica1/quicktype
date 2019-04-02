let time = 5;
let score = 0;
let activePlay = 1;
let i = 0;

const wordInput = document.getElementById("word-input");
const wordCurrent = document.getElementById("current-word");
const displayScore = document.getElementById("score");
const displayTime = document.getElementById("time");
const message = document.getElementById("message");
const words = [
	'minge',
	'joi',
	'finish',
	'marti'
];

function startGame(){
	showWord(words);
	wordInput.addEventListener('input',startMatch);
	setInterval(countDown,1000);
	setInterval(checkPlay,50);
}

function startMatch(){
	if(matchWord()){
		activePlay = 1;
		time = 6;
		showWord(words);
		wordInput.value = '';
		score++;
	}
	displayScore.innerHTML = score;
}

function matchWord(){
	if(wordInput.value === wordCurrent.innerHTML){
		i += 1;
		message.innerHTML = 'Correct';
		return 1;
	}else{
		message.innerHTML = '';
		return 0;
	}
	
}


function showWord(words){
	if(words[i] === 'finish') {
		console.log("acuma");
	}

	if(words[i]){
		wordCurrent.innerHTML = words[i];
	} else {
		wordCurrent.innerHTML = "";
	}	
}


function countDown(){
	if( time > 0 ){
		time--;
	} else if( time === 0 ){
		activePlay = 0;
	}
	displayTime.innerHTML = time;
}

function checkPlay(){
	if(activePlay === 0 && time === 0){
		message.innerHTML = 'You Lost';
		score = 0;
	}
}

function resetGame(){
	window.location.reload();
}
