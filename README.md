# google-apps-script-generate-randomized-data

This script is ideal for demonstration purposes, showing how to automate the creation of multiple sheets with randomized data and manage sheets within a Google Spreadsheet programmatically used only to populate google sheets with random data in multiple tabs.
 
# "createSampleSheets"
This function creates 20 new sheets in your current Google Sheets document. Each sheet is named "SampleSheet" followed by a number (1 through 20). The sheets are populated with shuffled columns and fake data, simulating hotel reservation information. The columns include "Date", "Name", "Room", "Price", "Check-in", and "Check-out".
 
Shuffling Columns: The column headers are shuffled in each sheet to create variability.
Fake Data Generation: Each column is filled with appropriate fake data. Dates are randomly generated between November 2023 and February 2024. Names are randomly generated as "Guest" followed by a number. Room numbers and prices are also randomly generated.
 
# "shuffleArray"
This utility function takes an array and shuffles its elements in a random order. It's used in createSampleSheets to randomize the order of column headers in each new sheet.
 
# "generateFakeData"
This function generates fake data appropriate to the type of data each column represents. For date-related columns ("Date", "Check-in", and "Check-out"), it creates random dates within a specified range (November 2023 to February 2024). For the "Name" column, it generates a guest name. For "Room", it produces a random room number, and for "Price", a random price value is generated.
 
# "deleteAllSheetsExceptFirst"
This function deletes all sheets in the active Google Spreadsheet, except for the first sheet. This is particularly useful for cleaning up after testing or demonstrations, but should be used with caution to avoid unintentional deletion of important data.
