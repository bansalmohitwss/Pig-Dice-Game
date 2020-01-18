/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'ry
//var x = document.querySelector('#current-'+activePlayer).textContent;
//console.log(x);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice = Math.floor(6*Math.random()+1);
    
    var dom = document.querySelector('.dice');
    dom.style.display = 'block';
    dom.src = 'dice-'+dice+'.png'; 
});