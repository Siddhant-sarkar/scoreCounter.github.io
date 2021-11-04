const blyt = document.querySelector("#p1");
const b2 = document.querySelector("#p2");
const rset = document.querySelector("#reset");
const s1 = document.querySelector("#p1Score");
const s2 = document.querySelector("#p2Score");
const mc = document.querySelector("#mc");

let scoreP1=0;
let scoreP2=0;
let maxTarget =5;
let gameOver = false;
document.querySelectorAll("h1")[1].textContent=`The max Target is ${maxTarget}`;

blyt.addEventListener('click',function(){
   if(!gameOver){
      scoreP1++;
      if(scoreP1 === maxTarget){
         gameOver = true;
         s1.classList.add('winner');
         s2.classList.add('loser');
      }
   }
   s1.textContent=scoreP1;
});

b2.addEventListener('click',function(){
   if(!gameOver){
      scoreP2++;
      if(scoreP2 === maxTarget){
         gameOver = true;
         s2.classList.add('winner');
         s1.classList.add('loser');
      }
   }
   s2.textContent=scoreP2;
});


rset.addEventListener('click',newAll);

function newAll(){
   scoreP1=0;
   scoreP2=0;
   s2.textContent=scoreP2;
   s1.textContent=scoreP1;
   gameOver=false;
   s1.classList.remove("winner","loser");
   s2.classList.remove("winner","loser");
}

mc.addEventListener('change',function(){
   maxTarget= parseInt(this.value);
   console.log(this.value);
   newAll();
});
