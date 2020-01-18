/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'ry
//var x = document.querySelector('#current-'+activePlayer).textContent;
//console.log(x);

initialize();



document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice = Math.floor(6*Math.random()+1);
    var dom = document.querySelector('.dice');
    
    if(dice===1)
        {
            nextPlayer();
        }
         else
        {
            dom.style.display = 'block';
             dom.src = 'dice-'+dice+'.png'; 
             roundScore += dice;
             document.getElementById('current-'+activePlayer).textContent = roundScore;
        }
});



document.querySelector('.btn-hold').addEventListener('click',function(){
    
    scores[activePlayer] += roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >=100)
        {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }
    else
        {
            nextPlayer();
        }
    
});



document.querySelector('.btn-new').addEventListener('click',function(){
   
    initialize();
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
});



function initialize()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}



function nextPlayer()
{
    roundScore=0;
    document.getElementById('current-'+activePlayer).textContent = '0';
    activePlayer = activePlayer===0 ? 1 : 0;
    document.querySelector('.dice').style.display = 'none';    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


