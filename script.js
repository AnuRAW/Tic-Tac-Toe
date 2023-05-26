console.log("Welcome to Tic Tac Toe")
let music = new Audio("music1.wav")
let audioturn = new Audio("music2.wav")
let gameover = new Audio("music3O.wav")
let turn = "X"
let over = false

//function to change the turn
const changeTurn = ()=>{
    return turn ==="X"?"0": "X"
}
//Function to check for a Win
const checkwin = ()=>{
let boxtext = document.getElementsByClassName('boxtext');
let Win = [
    [0, 1 ,2 ,5 ,5 ,0],
    [3, 4 ,5 ,5 ,15 ,0],
    [6, 7 ,8 ,5 ,25 ,0],
    [0, 3 ,6 ,-5 ,15 ,90],
    [1, 4 ,7 ,5 , 15, 90],
    [2, 5 ,8 ,15 ,15 ,90],
    [0, 4 ,8, 5, 15 ,45],
    [2, 4, 6 , 5 ,15 ,135],
]
Win.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !==  "")) {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
        over = true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
        document.querySelector(".line").style.width = "20vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
    }
})


}

//Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn = changeTurn();
            audioturn.play();
            checkwin();
           if (! over){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
           }
        }
    })
    })

    // reset

    reset.addEventListener('click',()=>{
        let boxtext = document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element=>{
            element.innerText = ""
        })
        turn = "X";
        over = false
        document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    })