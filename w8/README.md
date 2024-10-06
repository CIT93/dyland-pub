1. ## Importing the renderTbl function:

                import { renderTbl } from "./render.js";

- This line imports a function named renderTbl from another file: render.js.
    - The browser sees this statement and looks for the render.js file, so the function can be used later in the code.
2. ## Grabbing DOM elements:

                const FORM = document.getElementById("form");
                const OUTPUT = document.getElementById("output");
                const cfpData = [];

- FORM: This gets the HTML element with the ID form. It’s used to interact with the data submitted via the form.
- OUTPUT: This gets the HTML element with the ID output. It’s used to display the calculated results.
- cfpData: This is an empty array used to store the data for each form submission. 
    - After the import, these variables are declared and initialized right away.
    - The browser finds the corresponding elements in the DOM and makes them available to the script.
3. ## determineHouseHoldPts function:

This function calculates the points based on the number of people in the household. It takes the input numberInHouseHold and assigns points based on that value. The smaller the household, the more points they get (indicating a larger carbon footprint).

4. ## determineHouseSizePts function:

This function calculates the points based on the size of the home (large, medium, small, apartment). Larger homes are assigned more points, reflecting a larger carbon footprint.

5. ## start function:

This function is responsible for initiating the carbon footprint calculation.
It calls both determineHouseHoldPts and determineHouseSizePts with the values from the form (number of people in the household and the size of the house).
It calculates the total points by summing the household points and the house size points.
- Then, it adds an object containing all this information (household size, house size, individual points, and the total) to the cfpData array.
    - This function is called in the form submission when the user submits the form.
6. ## Form submission event listener:

This listens for a 'submit' event on the form. When the form is submitted, this function is executed.
- Form values: The function retrieves the user’s input values (firstName, lastName, numberInHouseHold, and houseSize) from the form.
- start: It passes the household size and house size to the start function to calculate the carbon footprint and update the cfpData array.
- output: It clears the previous output from the OUTPUT element by setting its innerHTML to an empty string.
- renderTbl: This calls the renderTbl function (from the imported render.js) to display the new results based on the updated cfpData array.
Resetting the form: This clears the form fields, preparing the form for new input.
Conclusion:
When the browser encounters this script:

### Summary:
- It imports the renderTbl function from another file.
- It grabs references to DOM elements (form and output) and initializes the cfpData array.
- It defines functions (determineHouseHoldPts, determineHouseSizePts, and start).
- It listens and waits for the form to be submitted. When the form is submitted:
    - It gathers the form data.
    - It calculates the points using the functions.
    - It updates the cfpData array.
    - It calls renderTbl to display the results.

<!-- I was trying to set the breakpoint at "import {renderTrbl}" and it wasn't working. I documented the code in the order on the page. Below are updated notes: -->   

# Starting at breakpoint at renderTble: 
1. ## Click submit - Trigger event listener:
When you click the submit button on the form, the event listener attached to the FORM element is triggered.
- Prevents default form submission: The first action inside the event listener is calling e.preventDefault(). This prevents the default form behavior, which would normally reload the page after submission.
- Reference form in global scope: The form is referenced via the FORM variable (previously defined with getElementById). The browser pulls data from it, such as the values for the first name, last name, household size, and house size, when the submit button is clicked.

2. ## Grab form values:
This code retrieves the values entered into the form:
- firstName and lastName pull the text input values.
- numberInHouseHold converts the household size input to an integer.
- houseSize grabs the value from the dropdown specifying the size of the home.

3. ## Calculate totals and push data into the cfpData array:
Next, the start function is called with numberInHouseHold and houseSize as parameters.
- Calculating Points:
    - determineHouseHoldPts(numberInHouseHold) and determineHouseSizePts(houseSize) are called to calculate points based on household size and house size.
    - These functions assign points based on predefined logic.

Pushing to cfpData: After calculating the points and the total, an object containing all the relevant data is pushed into the cfpData array. Each form submission adds a new object with the user's input and calculated totals.

4. ## Clear form output:
This line clears any previously displayed output in the OUTPUT element.
- This ensures that when new data is rendered, it doesn’t get appended to old content, preventing duplication.

5. ## Open the renderTbl module:
The renderTbl function is called, and the cfpData array (which now contains the latest object) is passed as a parameter. This function will now generate a new table based on the updated cfpData.
- Render table heading:
    - The renderTblHeading() function is called first, generating the table structure with the headers ("Name", "Household", "HouseSize", "Footprint", "Actions").
- Render table data:
    - Here, tblRowArr holds dynamic data from the cfpData array and renders results from the form and calculation total. 

3. ## Append row and table:
The constructed row (with the data) is appended to the tbody.
- The tbody is then appended to the table.

5. ## Append table to DOM:
TBL.appendChild(table);
- The complete table (with headings and data) is appended to the TBL element, making it visible in the HTML.
6. ## Clear the form:
FORM.reset();
- The form fields are cleared by calling reset(), so the user can input new data without manually clearing the form.
### Final Flow Recap:
- The form is submitted, and the event listener intercepts the submission, preventing the default behavior.
- It grabs the form values (first name, last name, household size, house size)
- Calculates the carbon footprint points, and pushes them into the cfpData array.
- The renderTbl function generates a table with the data, appends it to the DOM, and clears the form for the next input.

#### My understanding
When the form is submitted, the event listener prevents the default behavior, retrieves input values (first name, last name, household size, house size), calculates points using functions, and stores the data in an array. It then clears any previous results, generates a table with the updated data, and appends the table to the DOM. Finally, the form is reset for the next entry.

# Edit Button
I suppose the button could render the table again with the previous data as a prompt, like this: const newFirstName = prompt("obj.firstName"); 