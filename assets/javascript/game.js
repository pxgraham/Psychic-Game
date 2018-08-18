var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var random = Math.floor(Math.random() * letters.length);
var answer = letters[random];
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var guessedSoFar = [];

document.addEventListener('keyup', function(event) {
    var key = event.key.toUpperCase();
    if(letters.indexOf(key) > -1) {
        if(guessedSoFar.indexOf(key) < 0) {
            guessedSoFar.push(key);
            document.getElementById('guessesSoFar').textContent = guessedSoFar.toString();
            if(key === answer) {
                wins += 1;
                document.getElementById('wins').textContent = wins;
                random = Math.floor(Math.random() * letters.length);
                answer = letters[random];
                guessesLeft = 10;
                guessedSoFar = [];
                document.getElementById('guessesSoFar').textContent = guessedSoFar.toString();
            } else {
                guessesLeft -= 1;
                document.getElementById('guessesLeft').textContent = guessesLeft;
            }
            if(guessesLeft <= 0) {
                loses += 1;
                guessesLeft = 10;
                document.getElementById('guessesLeft').textContent = guessesLeft;
                document.getElementById('loses').textContent = loses;
                random = Math.floor(Math.random() * letters.length);
                answer = letters[random];
                guessedSoFar = [];
                document.getElementById('guessesSoFar').textContent = guessedSoFar.toString();
            }
        }
    }
});