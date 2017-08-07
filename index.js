const QUESTION_STORE= {
  questions: [
//question 1    
  { question: 'What happens when you use Crazed Alchemist‘s Battlecry on a minion with 0 attack (e.g. Doomsayer)?',
    answers: ['Nothing',
              'The minion is given a health of 1 while it gains its previous health value as attack',
              'The minion swaps health and attack values as they are, no special exceptions are made',
              'The minion trades attack and health values with Crazed Alchemist'],
    correctAnswer: 'The minion swaps health and attack values as they are, no special exceptions are made' 
  },
//question 2 
  { question: 'When you Silence the Ancient of War in Rooted form (+5 Health and Taunt), he becomes a 5/5 minion. What happens when you silence Druid of the Claw in Bear Form (+2 Health and Taunt)?',
    answers: ['It reverts back into a 4/4 Druid of the Claw',
              'It loses Taunt',
              'It Loses taunt and it\'s +2 Health but remains a bear',
              'It Loses all both buffs and cannot attack'],
    correctAnswer: 'It Loses taunt and it\'s +2 Health but remains a bear' 
  },
//question 3
  { question: 'If a minion that already attacked this turn is given Windfury (for example by Windspeaker or Enhance-o Mechano) – can it attack one more time?',
    answers: ['Yes',
              'No',
              'It can attack two MORE times totaling 3 attacks in this round',
              'It can attack once more but remains exhausted an additional turn after'],
    correctAnswer: 'Yes' 
  },
//question 4
  { question: 'Is there a minion that can attack more than 4 times per turn?',
    answers: ['Maybe?',
              'Yes, any minion with charge and shadowstep can attack once, then be returned for a second attack',
              'Yes, any minion with Windfury that doesn\'t suffer summoning exhaustion',
              'No, a minion can only attack once per turn.'],
    correctAnswer: 'Yes, any minion with charge and shadowstep can attack once, then be returned for a second attack' 
  },
//question 5
  { question: 'Does Spell Power (on Paladin’s side) affect damage dealt by the Eye for an Eye Secret?',
    answers: ['No, Spell Power only affects spells with immediate effects like Consecration',
              'Yes',
              'Yes, but only if you\'re casting Eye for an Eye while Spell Power is being granted',
              'No, Eye for an Eye is a Mage Secret'],
    correctAnswer: 'No, Spell Power only affects spells with immediate effects like Consecration' 
  },
//question 6  
  { question: 'Under what conditions a minion with Stealth gets unstealthed – when it receives damage, deals damage or both?',
    answers: ['When it Receives Damage',
              'When it Deals Damage',
              'Both',
              'Only when it attacks physically'],
    correctAnswer: 'Only when it attacks physically' 
  },
//question 7
{ question: 'Both you and your enemy are at 1 health with an empty board. You’re out of cards in the deck and will take fatigue damage with next card draw. You drop Knife Juggler followed by Novice Engineer. Who wins the game?',
    answers: ['My enemy because with no cards left in my deck Novice Engineer can\'t trigger, so it can\'t be played to trigger Knife Juggler.',
              'We Draw because in order of operations Novice Engineer\'s effect is triggered first, then Knife Juggler\'s, Hearthstone does not stop calculating damage until all operations are complete meaning we will both hit 0 health and tie',
              'I win because in order of operations Knife Juggler\'s effect is triggered before Novice Engineer\'s, my enemy takes 1 damage then the match ends because their health reaches 0 first',
              'My enemy wins because in order of operations Novice Engineer\'s effect is triggered first, then Knife Juggler\'s, causing me to draw a card and take fatigue damage and setting my health to 0 first.'],
    correctAnswer: 'We Draw because in order of operations Novice Engineer\'s effect is triggered first, then Knife Juggler\'s, Hearthstone does not stop calculating damage until all operations are complete meaning we will both hit 0 health and tie' 
  },
//question 8
{ question: 'When Warrior attacks a minion with a 1/1 Gorehowl, does it become a 0/1 weapon or it gets destroyed? If it becomes 0/1, can Warrior attack with it again?',
    answers: ['No the warrior can\'t attack, It becomes a 0/1 that does no damage but can be held on to for             triggering "weapon" card effects until a new weapon is equipped',
              'No the warrior can\'t attack, It becomes a 0/1 that counts as 1 armor',
              'No the warrior can\'t attack, It breaks on their turn as a 1/1 and the weapon is no longer in play',
              'Yes, the warrior can attack, It breaks upon use and deals 1 damage'],
    correctAnswer: 'Yes, the warrior can attack, It breaks upon use and deals 1 damage' 
  },
//question 9
{ question: 'A Priest steals enemy Warlock’s minion with Shadow Madness and uses Power Overwhelming on it. What happens to the minion after Priest ends a turn (assuming the minion didn’t die during Priest’s turn)?',
    answers: ['It dies when it\'s returned to the Warlocks side of the board',
              'It lives because it didn\'t reach the end of the Priests turn and it was the priest who cast Power Overwhelming, but it loses it\'s buff',
              'The minion now has a permanent buff of +4/4 and won\'t die while on the Warlock/s side of the board',
              'The minion can no longer remain under the priest\'s control since Shadow Madness only affects a minion with 3 attack or less and is returned to the warlock to die on the Warlock\'s turn'],
    correctAnswer: 'It dies when it\'s returned to the Warlocks side of the board' 
  },
//question 10
{ question: 'A Paladin is at 2 health with Truesilver Champion equipped. The opposing Hunter is at 4 health with Explosive Trap in play. The Board is empty, the Paladin attacks the Hunter with his weapon. What is the result of the game?',
    answers: ['Order of operations in Hearthstone means the Paladin will take 2 damage and because his health           is 0 will die, unable to complete the attack',
              'Order of operations in Hearthstone means the Paladin will take 2 damage, complete his attack and deal 4 damage, heal for 2 damage from Truesilver\'s passive healing, and the Hunter will die',
              'Order of operations in Hearthstone means the Paladin will attack and heal, however the hunter will take no damage since at the time of the attack the damage source was at a health of 0',
              'Order of operations in Hearthstone means the Paladin will attack and take 2 damage but the Hunter will take no damage because players with no health cannot use a weapon'],
    correctAnswer: 'Order of operations in Hearthstone means the Paladin will take 2 damage, complete his attack and deal 4 damage, heal for 2 damage from Truesilver\'s passive healing, and the Hunter will die'
    }
  ],
  currentQuestionIndex: 0,
  answerTracker: 0
};

$(document).ready(function(){
    loadQuiz();
    startQuiz();
    console.log('document is ready')
});

//function to load quiz 
function loadQuiz() {
  $('.js-start-page').show();
  $('.js-quiz-questions-page').hide();
  $('.js-question-feedback').hide();
}

//function to start quiz and hide the next button
function startQuiz (){
  $('.js-start-page').find('.js-start-button').on("click",(e =>{
    e.preventDefault();
    $('.js-start-page').hide();
    $('.js-quiz-questions-page').show();
    $('#next-question').hide();
    displayProgress();
    displayQuestion();
    displayAnswers();
    submitListener();
    nextListener();
    })
  );
}

//function that keeps track of questions
function displayProgress(){
  let progress = `<span>(` + (QUESTION_STORE.currentQuestionIndex + 1) + '/' + QUESTION_STORE.questions.length + `)</span>`;
  $('#question').append(`<p>` + progress + `</p>`);
  console.log('@progress is at' + progress)
  console.log('@CQI = '+QUESTION_STORE.currentQuestionIndex)
  console.log(QUESTION_STORE.questions.length)
    
}

//function that asks questions
function displayQuestion(){
  let currentQuestion = QUESTION_STORE.questions[QUESTION_STORE.currentQuestionIndex];
  $('#question').append(`<p>` + currentQuestion.question + `</p>`);
  console.log('@current question =' + currentQuestion.question)
}

//function that provides possible answers
function displayAnswers(answers) {
  let currentAnswers = QUESTION_STORE.questions[QUESTION_STORE.currentQuestionIndex];
  for (let i=0; i<currentAnswers.answers.length; i++){
    $('.answers-wrapper').append(`<label class="answer">
              <input type="radio" name="possibleAnswer" required="" value="`+currentAnswers.answers[i]+`">
              <span>`+currentAnswers.answers[i]+`</span>`);
  }
  console.log('@current answers =' + currentAnswers.answers)
}

//function to listen for submit button
function submitListener(){
$('#answer-box').on("submit", (e => {
    e.preventDefault();
    let userSelected = $('input[name="possibleAnswer"]:checked').val();
    checkAnswer(userSelected);
    console.log('SUBMIT WAS CLICKED')
    //logical condition so that if its final question results are displayed and next button hides
    if (QUESTION_STORE.currentQuestionIndex + 1 === QUESTION_STORE.questions.length){
      console.log('place final page here')
      $('#next-question').hide();
      $('#js-quiz-results').append(`<span>You\'ve answered `+QUESTION_STORE.answerTracker+ '/' + QUESTION_STORE.questions.length + ` questions right! </span>`);
    }
  }));
}

//function to check answer selection
function checkAnswer(userSelected) {
  let correctChoice = QUESTION_STORE.questions[QUESTION_STORE.currentQuestionIndex].correctAnswer;
  if (userSelected == correctChoice) {
    QUESTION_STORE.answerTracker++;
    $('#next-question').show();
    $('.js-question-feedback').empty().show().append(`<img src="https://media.giphy.com/media/rnoxb6N6aZjeo/giphy.gif"><h3>Correct!</h3>`).addClass('js-picture correct').on("click", (e =>{
      $('.js-question-feedback').hide();
    }));
  }
   else {
    $('#next-question').show();
    $('.js-question-feedback').empty().show().append(`<img src="https://media.giphy.com/media/lLtpmbmuYeE7u/giphy.gif"><h3>That didn\'t quite hit the mark!<br> `+ correctChoice +`</h3>`).addClass('js-picture wrong').on("click", (e =>{
      $('.js-question-feedback').hide();
    }));
  }
  reloadBox();
  $('#answer-box').hide();
  $('#question').hide();
  console.log('@correctanswer='+QUESTION_STORE.questions[QUESTION_STORE.currentQuestionIndex].correctAnswer);
  console.log('@Userselection ='+userSelected);
  console.log('ANSWER CHECKER RAN')
}

function reloadBox(){
  $('#question').empty();
  $('.answers-wrapper').empty();
  $('#question').show();
  $('#answer-box').show();
}

//function that loads the next question when the next button is clicked
function nextListener(){
    $('#next-button').on("click", (e=>{
        e.preventDefault();
        QUESTION_STORE.currentQuestionIndex++;
        displayQuestion();
        displayAnswers();
        displayProgress();
        $('.answers-wrapper').append(`<div class="submit-wrapper">
            <button id='submit-answer' type="submit" >Submit answer</button>
            </div>`);
        $('#next-question').hide();
        $('#question').show();
        $('#answer-box').show();
        console.log('@QuestionTracker='+QUESTION_STORE.answerTracker);
    }));
    console.log('@nextListener has fired' + nextListener)
}
