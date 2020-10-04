# Password Generator
### Pages:
### GitHubRepo:


*This is a password generator. This will generate a random password based on criteria entered by the user

## Password Generator created using:
* HTML - to create the content of the homepage. 
* CSS -  to style the content.
* Javascript - for the interaction of the user

## Features
### Prompts
* A prompt will ask the user how many characters they would like their password to be.
    a. The acceptance criteria required the password to be limited to between 8 and 128 characters (including 8 and 128).
    b. The user input will be stored in a variable and logged to the console

### Confirms
* A series of confirms are presented to the user to determine which types of characters the user would like to include in thier password. 
* When the user selects their response it is logged to the console to verify code is working.
* If the user selects true for any of the confirm messages presented to them, they type of character they selected will be added to an array and also written to the console for verification.
* If the user selects false of any of the confirm messages presented to them, no array is created for that character set.

### Validation
* On the prompt, if the user enters a selction that is out of range, they will be presented with an alert  to remind them of the criteria. They need to close the alert and start the process again.
* If the user selects false on any of the confirms, they will be presented with an alert to tell them that at least one character type has to be selected.
* There are several areas where a response is written to the console log. This is to ensure code is working as intended and to assist in debugging.

### Password Generation
* Once the all the password selections have been chosen by the user, a password will be randomly generated.
    a. A for loop was created to run through the generator as many times as the number of characters a user requested for their passsword.
    b. Math.floor and Math.random were used to make sure the password only contained whole numbers and not decimals.
    c. Each character selected by the password generator is joined in a string to create one password.

### Screenshots

![PasswordGeneratorScreen] (assets/PW Gen Screen.png)
![PromptExample] (assets/Prompt.png)
![ConfirmExample] (assets/Confirm.png)
![GeneratedPassword] (assets/Generated Password.png)
![AlertExample] (assets/Alert.png)
