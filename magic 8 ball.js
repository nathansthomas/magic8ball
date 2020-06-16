userName= 'Nathan';

if (userName){
  console.log('Hello, ' + userName + '!')
}

else{
  console.log('Hello!')
}

userQuestion = 'Does the viewer like the program?';

console.log(userName + ' asks ' +  userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'it is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall= 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it.';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
console.log(`The eight ball answered : ${eightBall}`);
}
