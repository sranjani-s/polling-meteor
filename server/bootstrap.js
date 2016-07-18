import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Polls.find().count() === 0) {

    var samplePolls = [
      {
        question: 'Where should we have our meeting?',
        choices: [
          { text: 'Campus', votes: 0 },
          { text: 'Salarpuria', votes: 0},
          { text: 'Ananth', votes: 0 }
        ]
      },
      {
        question: 'What time should the meeting be?',
        choices: [
          { text: 'Pre-lunch', votes: 0 },
          { text: 'During lunch', votes: 0 },
          { text: 'Post-lunch', votes: 0 }
        ]
      }
    ];

    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }
});
