
var turn=1;
var cscore1=0;
var cscore2=0;
var overall1=0;
var overall2=0;


document.querySelector('.btn-new').addEventListener('click', function() {
    document.getElementById('overall_p1').innerHTML='0';
    document.getElementById('overall_p2').innerHTML='0';
    document.getElementById('score_1').innerHTML='0';
    document.getElementById('score_2').innerHTML='0';
      
    document.querySelector('.p1').innerHTML='Player 1';
    document.querySelector('.p1').style.color='black';
    document.querySelector('.p2').innerHTML='Player 2';
    document.querySelector('.p2').style.color='black';
    turn=1;
     cscore1=0;
     cscore2=0;
     overall1=0;
     overall2=0;

});


document.querySelector('.btn-roll').addEventListener('click',()=>{
    var n1=Math.floor((Math.random() * 7));
    var n2= Math.floor((Math.random() * 7) );
  
    if(overall1<100 && overall2<100)
    {
            if(turn==1)
            {
                if(n1==0 || n2==0)
                {
                    document.getElementById('score_1').innerHTML=0;
                    cscore1=0;
                    document.getElementById('dice-1').style.display='none';
                    document.getElementById('dice-2').style.display='none';
                    turn= changeTurn(turn);
                }
                else
                {
                    cscore1+=(n1+n2);            
                    document.getElementById('dice-1').display='block';
                    document.getElementById('dice-1').src='dice-'+n1+'.png';
                    document.getElementById('dice-2').src='dice-'+n2+'.png';
                    document.getElementById('dice-1').style.display='block';
                    document.getElementById('dice-2').style.display='block';
                    document.getElementById('score_1').innerHTML=cscore1;
                }
            }
            else if(turn==2)
            {
                if(n1==0 || n2==0)
                {
                
                    document.getElementById('score_2').innerHTML='0';
                    cscore2=0;
                    document.getElementById('dice-1').style.display='none';
                    document.getElementById('dice-2').style.display='none';
                turn= changeTurn(turn);
                }
                else
                {    
                    cscore2+=(n1+n2);            
                    document.getElementById('score_2').innerHTML=cscore2;
                    document.getElementById('dice-1').src="dice-"+n1+".png";
                    document.getElementById('dice-2').src="dice-"+n2+".png";
                    document.getElementById('dice-1').style.display='block';
                    document.getElementById('dice-2').style.display='block';
                }
            }
    }
});


function changeTurn(n)
{
    var n1=n;
    n= (n%2)+1;
        
        document.querySelector('.Player-'+n).classList.add('active');
        document.querySelector('.Player-'+n).classList.remove('passive');        
        document.querySelector('.Player-'+n1).classList.add('passive');
        document.querySelector('.Player-'+n1).classList.remove('active');

        
         document.querySelector('.fa-'+n1).classList.remove('a1');    
        document.querySelector('.fa-'+n).classList.add('a1');
       
        

    return n;
  
}

document.querySelector('.btn-hold').addEventListener('click',()=>{


    if(overall2<100 && overall1<100)
    {
                if(turn==1)
                {
                    overall1+=cscore1;
                    cscore1=0;
                    document.getElementById('overall_p1').innerHTML=overall1;
                    document.getElementById('score_1').innerHTML=0;
                }
                else if(turn==2)
                {
                    overall2+=cscore2;
                    cscore2=0;
                    document.getElementById('overall_p2').innerHTML=overall2;
                    document.getElementById('score_2').innerHTML=0;

                }

                document.getElementById('dice-1').style.display='none';
                document.getElementById('dice-2').style.display='none';

                if(overall1>=100)
                {
                    document.querySelector('.p1').innerHTML='Winner!';
                    document.querySelector('.p1').style.color='red';
                }
                else if(overall2>=100)
                {
                    document.querySelector('.p2').innerHTML='Winner!';
                    document.querySelector('.p2').style.color='red';
                }
                turn=changeTurn(turn);
    }
   
    
   
});

