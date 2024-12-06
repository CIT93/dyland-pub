# Easy Tip
- A fun spin on the tipping calculator
    - Easy Tip takes the math and percentages out of tipping and determines a tip based on quality of service.
- Variables:
    - const userName = "Dylan";
    - let billAmount = 50;
    - let isSatisfied = true; 
- Decision Making Process
    - The app will use the user's input for the quality of service (e.g., "Excellent", "Good", "Okay", "Poor", "Terrible").
    - Depending on the selected quality, the app will decide the tip percentage:
        - "Excellent" = 25%
        - "Good" = 20%
        - "Okay" = 15%
        - "Poor" = 10%
        - "Terrible" = 5%
    - The tip percentage is then applied to the bill amount to calculate the tip.
    - The app will use if and else if statements to determine the appropriate tip.
    - The output will be displayed using console.log.