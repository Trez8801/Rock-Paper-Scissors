const usersChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('You can\'t throw that in rock, paper, scissors.');
    }
  };
  
  const computersChoice = () => {
    const cpu = Math.floor(Math.random() * 3);
    if(cpu === 0){
      return 'rock';
    } else if (cpu === 1){
      return 'paper';
    } else if (cpu === 2){
      return 'scissors';
    }
  };
  
  const determineWinner = (usersChoice, computersChoice) => {
    console.log(usersChoice, computersChoice)
    if (usersChoice === 'bomb'){
      return 'You won, ya lil cheater.'
    }
    if (usersChoice === computersChoice) {
      return 'It was a tie'
    }
    if (usersChoice === 'rock'){
      if(computersChoice === 'paper'){
        return 'Computer Won'
      } else {
        return 'You won' 
      }
    } 
    if (usersChoice === 'paper'){
      if(computersChoice === 'scissors'){
        return 'Computer Won'
      } else {
        return 'You won'
      }
    }
    if (usersChoice === 'scissors'){
      if (computersChoice === 'rock'){
        return 'Computer Won'
      } else {
        return 'You won'
      }
    }
  }
  
  const playGame = () => {
    const userChoice = usersChoice('bomb');
    const computerChoice = computersChoice();
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame()  