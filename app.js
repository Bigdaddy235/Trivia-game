let currentQuestion=0
let score=0
let time=15
let timer

const startBtn=document.getElementById("startBtn")

startBtn.onclick=startGame

function startGame(){

const username=document.getElementById("username").value

if(!username){

alert("Enter username")

return

}

document.getElementById("start-screen").classList.add("hidden")
document.getElementById("game-screen").classList.remove("hidden")

loadQuestion()

}

function loadQuestion(){

clearInterval(timer)

time=15

timer=setInterval(()=>{

time--

document.getElementById("timer").innerText="Time: "+time

if(time<=0){

nextQuestion()

}

},1000)

let q=QUESTIONS[currentQuestion]

document.getElementById("question").innerText=q.question

let html=""

q.answers.forEach((ans,i)=>{

html+=`<div class="answer" onclick="answer(${i})">${ans}</div>`

})

document.getElementById("answers").innerHTML=html

}

function answer(i){

if(i===QUESTIONS[currentQuestion].correct){

score+=10

}

nextQuestion()

}

function nextQuestion(){

currentQuestion++

if(currentQuestion>=QUESTIONS.length){

endGame()

}else{

loadQuestion()

}

}

function endGame(){

clearInterval(timer)

document.getElementById("game-screen").classList.add("hidden")

document.getElementById("result-screen").classList.remove("hidden")

document.getElementById("score").innerText="Score: "+score

}

function restartGame(){

location.reload()

}