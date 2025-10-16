# REFLECTION.md

## 1. Can I explain what my code does?

My code implements a 'Daily Meal Habits Survey' web form with multiple input types, including text fields, email, radio buttons, checkboxes, dropdown, number input, and a textarea for additional comments.  

### HTML ('index.html'): 
Structures the form into three fieldsets: Basic Information, Food Preferences, and Extra Details. Each input has a corresponding '<span>' element for displaying error messages.
### CSS ('styles.css'): 
Styles the form for readability and responsiveness. It includes hover effects, clear spacing, font styling, and mobile adjustments.
### JavaScript ('script.js'): 
Validates user input before form submission. It includes modular functions:
  - 'isNotEmpty()' – checks that text and number inputs are not empty.
  - 'isValidEmail()' – validates email format.
  - 'hasCheckedOption()' – ensures at least one radio or checkbox is selected.
  - 'isSelected()' – validates dropdown selection.
  - 'isValidUsername()' – checks that username is alphanumeric.
  - 'isValidDateFormat()' – validates date format (DD-MM-YYYY).
- The script displays error messages adjacent to invalid inputs and shows a success message when all validations pass.

Together, these components ensure the form is user-friendly, interactive, and prevents invalid submissions, fulfilling the assignment's objectives.

## 2. What was my coding process?

I followed these steps during development:

- Analyzed requirements first: Carefully read the assignment instructions to understand what the form needed and the validations required.
- Planned the workflow: Decided the order of tasks—HTML structure first, then CSS styling, and finally JavaScript validation.
- Organized the form logically: Grouped related input fields using <fieldset> and <legend> for clarity and accessibility.
- Used modular coding strategy: Created separate JavaScript functions for different validation types (text, email, radio, checkboxes, dropdowns, regex).
- Tested incrementally: Validated each input field step by step to ensure proper error handling and correct functionality before moving to the next.
- Focused on user experience: Ensured the form was visually clear, responsive, and easy to navigate for users.


## 3. What challenges did I have?

- Regex validation: Writing correct regex patterns for the username and date fields required testing to handle various valid and invalid formats.
- Form submission handling: Preventing submission while still showing a success message required careful placement of 'event.preventDefault()' and validating all fields in sequence.

## 4. What would I do differently now?

If I have to start over, I would:

- Implement real-time validation so errors appear as the user types, improving user experience.
- Include more comments in HTML and CSS for clarity and maintainability.
