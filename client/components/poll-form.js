Template.pollForm.events({

  'submit form': function(event) {

    event.preventDefault();

    var newPoll = {
      question: event.target.question.value,
      choices: [
        { text: event.target.choice1.value, votes: 0 },
        { text: event.target.choice2.value, votes: 0 },
        { text: event.target.choice3.value, votes: 0 }
      ]
    };

    Polls.insert(newPoll);
  }
});
