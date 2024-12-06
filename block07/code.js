/**
 * 1 Create a string for user "You have recived this message because you have been chosen to open an important vault"
2 assign 3 variables Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-). Each must equal one of the three codes in the combination. 10-40-39
3 add comments thoughout code to explain each step
4 Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
 */



//user
const user = 'You have recived this message because you have been chosen to open an important vault';

//message
const message = 'The secret combination is:';

//message
const end = 'Have a great day!';

//combination 1
const comb1 = 50/5;

//combination 2
const comb2 = 50-10;

//combination 3
const comb3 = 29+10;

//alert displaying (user)
alert (user);

//secret passcode combination
alert (message + ' '+comb1+'-'+comb2+'-'+comb3 );

//ending message
alert(end);