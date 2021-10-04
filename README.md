# Password Generator Starter Code

## 3rd Week Challenge Demands

This week’s Challenge requires me to create an application that a user can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## My Tasks On This Assignment and My Solutions

* I need to set a series of prompts for password criteria
and confirm the user which criteria to include in the password. So I create prompts confirm for all the characters criteria where user can confirm.

* I need to create prompt for the length of the password
   of at least 8 characters and no more than 128 characters that user can select in. So, I created a function to generate random numbers between 8 to 128 and add conditional statements for the min and max length.

* When user confirm the criterias to include in their password, it should be generated/selected. So, I create a function that will input their selections of characters.

* If the user skipped to choose from the criterias, then I asked/alert them to choose at least one character from the password criterias and prompts them again the characters criteria.

* When the user answered all prompts and selected characters to include in the their password, then the password should be created with their chosen length and characters. So, I created a function that will return their input and confirms.

* When the password is generated, then it should be displayed in an alert or written to the page password input. So, I add all the function that I've created inside the generatePassword() function to be executed.

### The Deployed Application link
https://alma-dev914.github.io/Password-Generator/

#### The Application Snapshot


<img width="1792" alt="Screen Shot 2021-10-04 at 9 16 04 AM" src="https://user-images.githubusercontent.com/65073138/135891354-bee74949-ad65-45b4-932b-c755ceab249a.png">
<img width="1792" alt="Screen Shot 2021-10-04 at 9 05 49 AM" src="https://user-images.githubusercontent.com/65073138/135891390-65dea892-506f-4abe-941c-14c37fba9bc9.png">

