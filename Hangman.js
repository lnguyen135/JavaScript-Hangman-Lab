
class Hangman {
    constructor(phrase) {
        this.phrase = phrase;
        this.guesses = 6;    
        this.lettersGuessed = [];
      }
    getDisplayMessage(){
      const lowerCasePhraseAsArray = 
      this.phrase.split('').
      map(l => l.toLowerCase());
      let displayMessage = '';
      for(let i = 0; i < lowerCasePhraseAsArray.length; i++){
        if(this.lettersGuessed.includes(lowerCasePhraseAsArray[i])){
          displayMessage += this.phrase[i];
        }
        else if (lowerCasePhraseAsArray[i] == " "){
          displayMessage += " ";
        } else {
          displayMessage += "*";
        }
    
      }
      return displayMessage;
  }
       
    guessLetter(letter){
        const lowerCaseLetter = letter.toLowerCase();
        const lowerCasePhraseAsArray = 
        this.phrase.split('').
        map(l => l.toLowerCase());
        if(lowerCasePhraseAsArray.includes(lowerCaseLetter)){
          this.lettersGuessed.push(lowerCaseLetter)
        }
        else {
          this.guesses--;
        }
    }
    

    getRemainingGuesses(){
        return this.guesses;;
    }

    isMessageSolved(){
        return this.getDisplayMessage().split('').every( char => char !== "*");
    }

}

module.exports = Hangman;