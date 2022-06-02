import { data } from "../db/data.js";
import { player } from "./player.js";


let welcomeMessage = window.alert('Bienvenid@ al Juego de preguntas y respuestas');

let userLogin = "";


const container = document.querySelector(".container");
container.classList.add("container-lg","d-flex","justify-content-center","align-items-center","mt-5");
container.style.height = "1200 px";
const userName = document.createElement("input");
userName.classList.add = ("w-25");
userName.type = "text";
userName.id = "nombre";
userName.placeholder = "Ingrese su nombre"

userName.addEventListener('change', (e) => {
    almacenar(e.target.value)
})

function almacenar(params) {
    userLogin = params
}



//crear texto display position absolut
const buttonOk = document.createElement("button");
buttonOk.className = "btn btn-outline-success";
//buttonOk.className = "ms-2";
buttonOk.classList.add("btn","btn-outline-success","ms-2","fs-8","btn-lg","p-3","my-2");
const surrenderButton = document.createElement("button");
surrenderButton.classList.add("btn","btn-outline-danger","btn-lg","w-50","ms-2","mt-2");
buttonOk.innerHTML = "Enviar";
surrenderButton.innerHTML = "Rendirse";
const image = document.createElement("img");

buttonOk.onclick = () => toSend();

surrenderButton.onclick = () => surrender();

container.append(userName,buttonOk,image);
let question;
const tdA = document.createElement("td");
const btnA = document.createElement("button");
btnA.className = "btn btn-outline-info fs-2 btn-lg p-3 my-2";

const tdB = document.createElement("td");
const btnB = document.createElement("button");
btnB.className = "btn btn-outline-info fs-2 btn-lg p-3 my-2";

const tdC = document.createElement("td");
const btnC = document.createElement("button");
btnC.className = "btn btn-outline-info fs-2 btn-lg p-3 my-2";

const tdD = document.createElement("td");
const btnD = document.createElement("button");
btnD.className = "btn btn-outline-info fs-2 btn-lg p-3 my-2";

let category = 0;

function toSend() {
    localStorage.setItem(userLogin,0);
    container.innerHTML = "";
    newQuestion();
    
}
 

function newQuestion() {
    const containerQuestions = document.createElement("div");
    containerQuestions.classList.add("d-flex","flex-column","justify-content-between","align-items-center");    
    const categoria = data[category];
    question = categoria.questions[Math.floor(Math.random()*categoria.questions.length)]

    //Creación titulo 

    const title = document.createElement("h1");
    title.classList.add("h1");
    //Creación tabla

    const table = document.createElement("table");
    table.classList.add("table","fs-3","w-100","table_style","table-borderless","text-center");
    //Creación de Filas
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const tr3 = document.createElement("tr");
    const tr4 = document.createElement("tr");
    
    btnA.textContent = `A: ${question.answers[0].option}`;
    tdA.appendChild(btnA);
    btnB.textContent = `B: ${question.answers[1].option}`;
    tdB.appendChild(btnB);
    btnC.textContent = `C: ${question.answers[2].option}`;
    tdC.appendChild(btnC);
    btnD.textContent = `D: ${question.answers[3].option}`;
    tdD.appendChild(btnD);



    table.append(tr1);
    tr1.append(tdA);
    table.append(tr2);
    tr2.append(tdB);
    table.append(tr3);
    tr3.append(tdC);
    table.append(tr4);
    tr4.append(tdD);

    title.innerHTML = question.question;
    containerQuestions.append(title,table,surrenderButton,image);
    container.append(containerQuestions);
}


tdA.addEventListener('click', async (e) => {
    validation(0);
})

tdB.addEventListener('click', async (e) => {
    validation(1);
})

tdC.addEventListener('click', async (e) => {
    validation(2);
})

tdD.addEventListener('click', async (e) => {
    validation(3);
});


let points = localStorage.getItem(userLogin);

function validation(answer) {
    container.innerHTML = "";
    
    if (question.answers[answer].correctAnswer) {
        
        localStorage.setItem(userLogin, points = points +100);
        
        if(category<data.length-1){
            category += 1;
            newQuestion();          
        }else{
            youWon();
            location.reload();         
        }  
        
    }  else youLost();
}

function surrender() {
    alert(`Has abandonado, puntos: ${localStorage.getItem(userLogin)}`);
    location.reload();
}

function youLost() {
    alert(`Lo siento has perdido, puntos: ${localStorage.getItem(userLogin)}`);
    location.reload();
}

function youWon() {  
    alert(`Has ganado el Juego, Tus puntos: ${localStorage.getItem(userLogin)}`);
    location.reload();
}

for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
  }


