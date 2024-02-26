let score = {
    win : 0,
    lose : 0,
    tie : 0
};
// UpdateScore();

function Game(Playermove){
const button=ComputerMove();

    let result='';
    if(Playermove === 'Rest'){
        score.win=0;
        score.lose=0;
        score.tie=0;
        //alert(`win:${score.win}, lose:${score.lose}, Tie:${score.tie}`);
    }
    if(Playermove==='Sissor')
    {
            if(button==='Rock')
        {
            result='wins';
        }else if(button==='papre')
        {
            result='loses';
        }else 
        {
            result='Tie';
        }
    }else if(Playermove==='paper'){

            if(button==='Rock')
            {
                result='loses';
            }else if(button==='papre')
            {
                result='Tie';
            }else 
            {
                result='wins';
            }
    }
    else if(Playermove==='Rock'){
        if(button==='Rock')
            {
                result='Tie';
            }else if(button==='papre')
            {
                result='wins';
            }else 
            {
                result='loses';
            }

    }
    if(result === 'wins'){
        score.win += 1;
    }
    else if(result === 'loses')
    {
        score.lose += 1;
    }
    else if(result === 'Tie'){
        score.tie += 1;
    }
              
    console.log(result);
    
    console.log(`Win : ${score.win}, loses:${score.lose}, Tie:${score.tie}`);
    if(score.win + score.lose + score.tie === 10){
         console.log(score);
         alert(`Win : ${score.win}, loses:${score.lose}, Tie:${score.tie}`);
        
     }
    if(score.win + score.lose + score.tie === 10){
        score.win=0;
        score.lose=0;
        score.tie=0;
        console.log(score);
        UpdateScore();
        document.querySelector('.js-move').innerHTML=`Yor reaches 10 move please start again`;
        document.querySelector('.js-result').innerHTML=``;
        
    }
    else{
        UpdateScore();
        document.querySelector('.js-result').innerHTML=result;
    if(Playermove ==='Rest'){
        document.querySelector('.js-move').innerHTML=`Game was reset please start again`;
    }
    else{
        document.querySelector('.js-move').innerHTML=`YourMove: ${Playermove} & ComputerMove: ${ComputerMove()}`;
    }
    }
    
   
    //console.log(score);
    //alert(`${result}`);
    
}   
function UpdateScore(){
document.querySelector('.js-scoreButton').innerHTML= `Win : ${score.win}, loses:${score.lose}, Tie:${score.tie}`;
}


function ComputerMove(){
const Number= Math.random();
let button='';
if(Number>=0 && Number<=1/3)
{
button='Rock';
}else if(Number>=1/3 && Number<=2/3)
{
button='papre';
} else if(Number>=2/3 && Number<=1){
button='Sissor';
}
console.log(button);
return button;
}