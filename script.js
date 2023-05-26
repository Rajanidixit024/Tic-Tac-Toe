let music = new Audio("Change.mp3");
let audioTurn = new Audio("Ting.mp3");
let gameover = new Audio("Lost.mp3");
let turn = "X";
let isOver=false;
const changeTurn =()=>{
    return turn === "X"?"O":"X";
}
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
   let wins = [
    [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
   ]
   wins.forEach(e=>{
       if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[2]].innerText!==""){
         document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "  Won the Game";
         music.play();
         isOver = true;
         document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="205px";
         document.querySelector('.line').style.width="20vw";
         document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
   })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText==''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isOver){
            document.getElementsByClassName("info")[0].innerText= "Now It's Turn for : " + turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText=" ";
    })
    turn ='X';
    isOver=false;
    document.querySelector('.line').style.width="0vw";
    document.getElementsByClassName("info")[0].innerText="It's Turn for : "+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0px";
}
)
