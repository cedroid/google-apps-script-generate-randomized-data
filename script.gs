function createSampleSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
 
  // Define the column names
  var columnNames = ["Date", "Name", "Room", "Price", "Check-in", "Check-out"];
 
  // Create 20 sample sheets, you can generate more or less
  for (var i = 0; i < 20; i++) {
    var sheetName = "SampleSheet" + (i + 1);
    var sheet = ss.insertSheet(sheetName);
 
    // Shuffle the column names for each sheet
    var shuffledColumns = shuffleArray(columnNames.slice()); // Create a copy and shuffle it
 
    // Set the column names
    sheet.getRange(1, 1, 1, shuffledColumns.length).setValues([shuffledColumns]);
 
    // Fill with fake data
    for (var row = 2; row <= 21; row++) {
      for (var col = 1; col <= shuffledColumns.length; col++) {
        var fakeData = generateFakeData(shuffledColumns[col - 1]);
        sheet.getRange(row, col).setValue(fakeData);
      }
    }
  }
}
 
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
 
 
function generateFakeData(columnName) {
  // Generate fake data based on the column name
  switch (columnName) {
    case "Date":
    case "Check-in":
    case "Check-out":
      // Generate a random date between November 2023 and February 2024
      var startDate = new Date(2023, 10, 1); // November 1, 2023
      var endDate = new Date(2024, 1, 28);   // February 28, 2024
      var randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
      return Utilities.formatDate(randomDate, Session.getScriptTimeZone(), "MM/dd/yyyy");
    case "Name":
      return "Guest " + Math.floor(Math.random() * 100);
    case "Room":
      return Math.floor(Math.random() * 500) + 1; // Random room number
    case "Price":
      return (Math.random() * 300 + 50).toFixed(2); // Random price between 50 and 350
    default:
      return "Unknown";
  }
}
 
function deleteAllSheetsExceptFirst() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
 
  // Loop through sheets and delete all except the first one
  for (var i = sheets.length - 1; i > 0; i--) {
    ss.deleteSheet(sheets[i]);
  }
}
