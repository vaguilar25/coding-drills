// require inquirer

var inquirer = require('inquirer');
var listQuotes = [];

// define our initial quotes
var actionList = [{ value: 1, name: 'add to a list of quotes' }, { value: 2, name: 'select a quote to display' }, { value: 3, name: 'exit' }];


// call on the function that displays our main menu
var question = {

  type: 'list',
  name: 'actions',
  message: 'What would you like to do?',
  choices: actionList,



};
init()
function init() {
  inquirer.prompt(question).then(answers => {
    //console.log('\nOrder receipt:');
    //console.log(JSON.stringify(answers, null, '  '));
    console.log(answers.actions);
    if (answers.actions === 1) {
      addQuote();
    } else if (answers.actions === 2) {
      displayQuote();
    }

  });
}

function displayQuote() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'quotes',
      message: 'Choose an author quote:',
      choices: listQuotes

    },

  ]).then(function (answers) {

    console.log( answers.quotes);
   
    
    init();
  })


}

function addQuote() {


  inquirer.prompt([
    {
      type: 'input',
      name: 'author',
      message: 'Enter the author name:'

    },
    {
      type: 'input',
      name: 'quote',
      message: 'Enter a quote'
    }

  ]).then(function (answers) {

    listQuotes.push(
      {name:answers.author, value:answers.quote}
    );
    console.log(listQuotes[0].value + " - " + listQuotes[0].name);
      init();

  })

}



