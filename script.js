let userScore =0 ;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const comptscorepara =document.querySelector("#computer-score");
const drawgame = () => {
   
    msg.innerText="it was a Draw ._."
}

const genComputerChoice  = ()=>{
    const options = ["rock","paper","scissors"];
    //using math.random to generate numbers between 0 and 2 
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}
const showwinner =(userwin,userchoice,comptchoice) =>{
if (userwin){
    userScore++;
    userscorepara.innerText=userScore;

    msg.innerText =(`You win:) your  ${userchoice} beats ${comptchoice}`);

}
else {
    compScore++;
    comptscorepara.innerText=compScore;
  
    msg.innerText=(`you lose :( ${comptchoice} beats your ${userchoice}`)
}
}
const playGame = (userchoice) => {
    msg.innerText="Play your move ";
    console.log("userchoice = ",userchoice );
    //generate the computer choice :
    const comptchoice = genComputerChoice();
    console.log("this is the computer's choice=",comptchoice);
    //now deciding who won 
    if (userchoice===comptchoice){
    drawgame();
    }
    else {
       let  userwin=true ;
       if(userchoice==='rock'){
       userwin = comptchoice==='paper'? false:true ;
       }
        else if (userchoice==='paper'){
        userwin =comptchoice==='scissors'?false:true ;
       }
       else {
        userwin = comptchoice==='rock'?false:true ;

       }
    showwinner(userwin,userchoice,comptchoice);

    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
    console.log("choice was clicked",userchoice);
    playGame(userchoice);
    });
});
