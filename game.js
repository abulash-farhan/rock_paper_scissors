function getComputerChoice (def = 3){
    let num = Math.floor(Math.random()*def);
    const game = ["Paper","Scissor","Stone"];
    return (game[num]);
}

function gameDecider(playerChoice, ComputerChoice){
        if(playerChoice == ComputerChoice){
            return 0;
        }
        else if(playerChoice == "Paper" && ComputerChoice=="Scissor" ){
            return -1;
        }
        else if(playerChoice == "Paper" && ComputerChoice=="Stone" ){
           return 1;
        }
        else if(playerChoice == "Scissor" && ComputerChoice=="Paper" ){
            return 1;
        }
        else if(playerChoice == "Scissor" && ComputerChoice=="Stone" ){
            return -1;
        }
        else if(playerChoice == "Stone" && ComputerChoice=="Paper" ){
            return -1;
        }
        else if(playerChoice == "Stone" && ComputerChoice=="Scissor" ){
            return 1;
        }
        else{
            return null;
        }
}

let YourScore = 0;
let ComputerScore = 0;
for(let i=0;i<5;i++){
    let input = prompt("Enter your choice");
    let compInput = getComputerChoice();
    let result = gameDecider(input,compInput);
    while(result == null){
        input = prompt("Invaid Input! Try Again!");
        result = gameDecider(input,compInput);
    }
    
        if(result==1){
            alert(`You Win! Computer: ${compInput} - You: ${input} `);
             YourScore++;
         }
         else if(result==-1){
             alert(`You Lose! Computer: ${compInput} - You: ${input} `);
             ComputerScore++;
          }
          else if(result==0){
             alert(`You Draw! Computer: ${compInput} - You: ${input} `);
          }
    }
     
if(ComputerScore>YourScore){
    alert(`YOU LOSE! \n Final Scores after five rounds \n Computer:${ComputerScore} You:${YourScore}`);
}
if(ComputerScore<YourScore){
    alert(`YOU Win! \n Final Scores after five rounds \n Computer:${ComputerScore} You:${YourScore}`);
}
if(ComputerScore==YourScore){
    alert(`DRAW! \n Final Scores after five rounds \n Computer:${ComputerScore} You:${YourScore}`);
}


