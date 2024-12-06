# Recycle Challenge
1. calculateRecyclingPoints():
    - Start with 24 points if no recycling is done.
    - Subtract 4 points for each category recycled from the following:
    - Glass, Plastic, Paper, Aluminum, Steel, Food waste.
3. Update calculation
- Include waste and recycling calculations in the total score:
    - Add waste points from calculateWastePoints.
    - Subtract recycling points from calculateRecyclingPoints.
    - Return updated totals
4. Extend Event Listener in main.js
- Capture new form input:
    - recyclingCategories
- Pass these values into the FP Class constructor.
5. Render Waste and Recycling Data in renderTable.
- Update table headers to Display points calculated for waste and recycling.