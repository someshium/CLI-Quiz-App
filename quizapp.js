var readLineSync = require('readline-sync');
var chalk= require('chalk')


var userName= readLineSync.question(chalk.red.bold("Hello!")+ chalk.bold.strikethrough("can I know Your Name: "));

console.log(chalk.green("Hello "+ chalk.bold(userName)+" Welcome to DO YOU KNOW "+chalk.bold("SOMESH")));

function play(question, answer){
  console.log("\n");
  console.log(chalk.bgYellow(question));
  console.log(data[i].option1);
  console.log(data[i].option2);
  console.log(data[i].option3);
  console.log(data[i].option4);
  var userAnswer = readLineSync.question("Your answer is : ");

  if(userAnswer == answer){
    console.log(chalk.bgGreen.bold(" You are Right!"));
    count++;

  }
  else{
    console.log(chalk.bgRed.bold("Ah! Nope"));

  }


}

var data =[
  {
    question: "When Was somesh Born?",
    option1: "1. 14th March 2000",
    option2: "2. 16th July 2000",
    option3: "3. 14th April 2000",
    option4: "4. 15th March 2000",
    answer: 1
    
  },
  {
    question: "What Does Somesh Love in COmputer Science?",
    option1: "1. Web Developement",
    option2: "2. AI",
    option3: "3. Cybersecurity",
    option4: "4. Data Analysis",
    answer: 1
    
  },
  {
    question: "What is somesh Presently Learning?",
    option1: "1. Full Stack Web Development",
    option2: "2. AI and ML",
    option3: "3. Hacking",
    option4: "4. Linux",
    answer: 1
    
  },
  {
    question: "What Kind of Person Somesh Is?",
    option1: "1. Talkative",
    option2: "2. Introvert but Kind-Hearted",
    option3: "3. Extrovert",
    option4: "4. Fearless",
    answer: 2
    
  },
  {
    question: "What is Somesh's Ultimate Dream?",
    option1: "1. To Become Rich",
    option2: "2. To travel",
    option3: "3. To Win Over his Fears",
    option4: "4. To have name and fame",
    answer: 3
    
  }
];
var status='y'
do{
var count =0;
for(var i=0;i<data.length;i++){

  play(data[i].question, data[i].answer,data[i].option1,data[i].option2,data[i].option3,data[i].option4);
  
}

console.log("\n");
console.log(chalk.bgCyan.bold("Your Score is : "+ count)) ;
var s= readLineSync.question(chalk.bgMagenta.bold("wanna Play again? y/n"));
if(s === 'n')
status = 'n'

}while(status === 'y')



