// JavaScript Document
//Defining Global Variable
	var currentScore = 0;
	var downloadTimer;
	var inter;
	var inter1;
	var inter5;
	var inter10;
	var death;
	var timeleft;
	var saveScore = 0;
	var array;
	var coord1;
	var highScore = 0;
	var coords;
	var total = 0;
	var highScore = 0;
	var interTime;


function addScore11(){
	currentScore++;
	document.getElementById("score").innerHTML = currentScore;
	array = document.getElementsByClassName("active1");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore11);
		array[i].setAttribute("class", "void");
		
	}
	}
function	addScoreTime() {
	timeleft = timeleft + 2;
	document.getElementById("time").innerHTML = timeleft;
	array = document.getElementsByClassName("time");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScoreTime);
		array[i].setAttribute("class", "void");
	}
	}
			
function addScore1(){
	currentScore++;
	document.getElementById("score").innerHTML = currentScore;
	array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
	}
			
function addScore5(){
	currentScore = currentScore + 5;
	document.getElementById("score").innerHTML = currentScore;
	array = document.getElementsByClassName("silver");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
	}
	}

function  addScore10() {
	
				currentScore = currentScore + 10;
		
				document.getElementById("score").innerHTML = currentScore;
				array = document.getElementsByClassName("gold");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore10);
		array[i].setAttribute("class", "void");
		}
	}
//picks random coord for mole

function removeMoles5() {
	

	var array = document.getElementsByClassName("silver");
	
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore5);
		array[i].setAttribute("class", "void");
		
	}
}

function deathScore(){
		alert("YOU HIT ERIN! YOU LOST!");
		timeleft = 0;
}

function removeMoles1() {
	

	array = document.getElementsByClassName("active");
		for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", addScore1);
		array[i].setAttribute("class", "void");
		
	}
}
function removeMoles10() {
	array = document.getElementsByClassName("gold");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScore10);
		array[i].setAttribute("class", "void");
		
	}
	}
function removeMolesDeath() {
	

	array = document.getElementsByClassName("deathmole");
	
	for( var i = 0; i < array.length; i++) {
		array[i].removeEventListener( "click", deathScore);
		array[i].setAttribute("class", "void");
		
	}
}
function removeMolesTime() {
		array = document.getElementsByClassName("time");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScoreTime);
		array[i].setAttribute("class", "void");
		
	}
	
	}
	
function removeMoles11() {
	
//gets array of all +1 moles
	array = document.getElementsByClassName("active1");
		for( var i = 0; i < array.length; i++) {
			//loops through and removes all +1 moles
		array[i].removeEventListener( "click", addScore11);
		array[i].setAttribute("class", "void");
		
	}
}


		
function coord(){
		var randomPlaceX = Math.floor(Math.random()*3)+1;
		var randomPlaceY = Math.floor(Math.random()*5)+1;
		var place = "mole" + randomPlaceX + randomPlaceY;
		return place;
		}


function moveMoleAround11() {
			coord1 = coord();
			if (coord1 === coords){
				coords = coord();
				}
				else{
					coords = coord1;
					}
			
	//sets class
			document.getElementById(coords).setAttribute("class", "active1");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore11 );
			//removes +1 moles after a second
			setTimeout(removeMoles11, 1500);
}

function moveMoleAround5() {
				coord1 = coord();
			if (coord1 === coords){
				coords = coord();
				}
				else{
					coords = coord1;
					}
	//sets class
			document.getElementById(coords).className="silver";
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore5 );
			//removes all +5 moles after 1 second
			setTimeout(removeMoles5, 1000);
}

function moveMoleDeath() {
				coord1 = coord();
			if (coord1 === coords){
				coords = coord();
				}
				else{
				coords = coord1;
					}
	//sets class

			document.getElementById(coords).setAttribute("class", "deathmole");
//adds event listener
			document.getElementById(coords).addEventListener( "click", deathScore );
			//removes death moles after a second
			setTimeout(removeMolesDeath, 1000);
}
function moveMoleAroundGold() {
			coord1 = coord();
			if (coord1 === coords){
				coords = coord();
				}
				else{
			coords = coord1;
					}
	//sets class
			document.getElementById(coords).setAttribute("class", "gold");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore10 );
			//removes Gold moles after a 0.75 seconds
			setTimeout(removeMoles10, 750);
	}
function moveMoleAroundTime() {
			var coord1 = coord();
			if (coord1 === coords){
				coords = coord();
				}
				else{
			coords = coord1;
					}
	//sets class
			document.getElementById(coords).setAttribute("class", "time");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScoreTime );
			//removes +1 moles after a second
			setTimeout(removeMolesTime, 750);
}

function moveMoleAround1() {
			var coord1 = coord();
			if (coord1 === coords){
				coords = coord();
				}
				else{
			coords = coord1;
					}
	//sets class
			document.getElementById(coords).setAttribute("class", "active");
//adds event listener
			document.getElementById(coords).addEventListener( "click", addScore1 );
			//removes +1 moles after a second
			setTimeout(removeMoles1, 1500);
}
//starts Game
function start() {

	currentScore = 0;
	//Time Variable(45 Seconds)



	timeleft = 45;
		
	inter = setInterval(moveMoleAround1,2000);

	inter1 = setInterval(moveMoleAround11,1700);
	death = setInterval(moveMoleDeath,15000);
	inter5 = setInterval(moveMoleAround5, 5000);
	inter10 = setInterval(moveMoleAroundGold,7500);
	interTime = setInterval(moveMoleAroundTime,10000);
	var t=setInterval(countdown_timer, 1000); 

	function countdown_timer()  {
		document.getElementById("time").innerHTML = timeleft;
		timeleft--;
		if(timeleft === -1) {
			total = currentScore + total;
			document.getElementById("total").innerHTML = total;
			clearInterval(t);
			clearInterval(inter);
			clearInterval(inter1);
			clearInterval(inter5);
			clearInterval(inter10);
			alert("Time's Up!");
			document.getElementById("start").disabled = false;
		//makes HighScore
			if 	(currentScore > highScore){
				highScore = currentScore;
				document.getElementById("highScore").innerHTML = highScore;
				document.getElementById("totalScore").innerHTML = total;
	currentScore = 0;
	}
	currentScore = 0;

	  }
	}


		setTimeout(disableButton,50);
} // end start function

function disableButton()
{
	document.getElementById("start").disabled = true;
	
}
	
	
//highscore 
function saveCookies(){
	var exdays= 69;
	highScore = saveScore + highScore;
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "highScore=" + highScore + expires;
	alert("Saved!");

}
window.onload = function loadCookies(){
	var highScore = document.cookie;
}
function clearCookies(){
	
}
	if(timeleft <= 0){
   		clearInterval(downloadTimer);
		var saveScore = currentScore;
		currentScore = 0;}
	
	function skinChange(skin){
		document.getElementById("pagestyle").setAttribute("href", skin+".css");
	}