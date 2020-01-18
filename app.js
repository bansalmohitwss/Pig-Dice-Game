var scores, roundScore, activePlayer, isfinish;

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';
//var x = document.querySelector('#current-'+activePlayer).textContent;
//console.log(x);

initialize();



document.querySelector('.btn-roll').addEventListener('click',function(){
    
   if(!isfinish)
       {
            var dice = Math.floor(6*Math.random()+1);
            var dom = document.querySelector('.dice');
    
            if(dice===1)
            {
                nextPlayer();
            }
             else
             {
                 dom.style.display = 'block';
                 dom.src = 'images/dice-'+dice+'.png'; 
                 roundScore += dice;
                 document.getElementById('current-'+activePlayer).textContent = roundScore;
             }
       }
});



document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(!isfinish)
        {
            scores[activePlayer] += roundScore;
            document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
            var input,Score;
            
            input = document.querySelector('.winningScore').value;
            
            if(input)
                {
                    Score = input;
                }
            else
                {
                    Score = 100;
                }
            
            if(scores[activePlayer] >=Score)
                {
                        document.querySelector('#name-'+activePlayer).textContent = 'Winner';
                        document.querySelector('.dice').style.display = 'none';
                        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                        isfinish = true;
                }
            else
                {
                        nextPlayer();
                }
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
    isfinish = false;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
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


