# My Solution
## Table Render
I wasn't sure how to approach this problem at first. I asked chatgpt how to approach it, and this is the solution is gave me:

    for (let i = 0; i < 4; i++) {
    tr.appendChild(document.createElement("td"));
    }

- This loop creates and appends 4 empty <td> elements to the table row. (similar to the solution in the video)
- Each iteration of the loop adds one <td> element.
    - How it works:
        - When i = 0: A <td> is created and appended to the row.
        - i is incremented (i++), so now i = 1.
- The condition i < 4 is still true, so another <td> is created and appended.
This process repeats until i = 4, at which point the condition i < 4 becomes false, and the loop exits.

This code created unnecessary cells in the row that I didn't like, and upon further evaluation, I realized all I had to do was change the column span (colspan). 

    td.setAttribute("colspan", 4);

This put the "Average Footprint Score" in a row that spans the first 4 rows, and puts the data directly below the total scores. 

## Water Consumption
1. Update the FP Class:
- Add a new property for water points.
- Add logic to calculate these points based on the new criteria.
- Update the total points calculation.
2. Create a New Class:
- Create a Water class to calculate the water consumption points.
3. Update the Form:
- Add inputs to capture the water usage data (e.g., dishwasher and washing machine usage).
4. Update Render Logic:
- Include the new property in the rendered table.
