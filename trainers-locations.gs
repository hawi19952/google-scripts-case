function getSessions() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Trainers Dataset");
  const sessions = sheet.getRange("A:G").getValues();
  return sessions;
}

function getVenues() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Resources");
  const venues = sheet.getRange("A66:C83").getValues();
  return venues;
}

function setHeaders(sheet) {
  sheet.getRange("A1:L1").setValues([[
    "ID",               //0
    "Session ID",       //1 
    "Coordinator ID",   //2 
    "Coordinator Name", //3
    "Month",            //4
    "Course",           //5
    "Trainers",         //6
    "Language",         //7
    "Location",         //8
    "Rate",             //9
    "Venue Name",       //10
    "Capacity"          //11
    ] 
    ]);
}

function getCoordinators() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Coordinators");
  const cords = sheet.getRange("A22:C63").getValues();
  return cords;
}

function myFunction() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Trainers With Location");

  const sessions = getSessions();
  const venues = getVenues();
  const cords = getCoordinators();

  setHeaders(sheet);  
  let rowCounter = 2;

  for (let i = 0; i < sessions.length; i++) {
    const session = sessions[i];
    const id = session[0];
    const month = session[1]
    const course = session[2]
    const trainer = session[3]
    const lang = session[4]
    const location = session[5];
    const rate = session[6];
    const matchingVenues = venues.filter(v => v[1] === location )

    const matchingCords = cords.filter(c => c[2] === course);

    for (let j = 0; j < matchingVenues.length; j++) {
      const mathcingVen = matchingVenues[j]
      const venue = mathcingVen[0]
      const capacity = mathcingVen[2];

      for (let k = 0; k < matchingCords.length; k++) {
        const cord = matchingCords[k];
        const cordId = cord[0];
        const cordName = cord[1];
        const row = rowCounter;
        sheet.getRange(row, 1, 1, 12).setValues([
        [
          rowCounter-1, 
          id, 
          cordId,
          cordName,
          month, 
          course, 
          trainer, 
          lang, 
          location, 
          rate, 
          venue, 
          capacity
        ]
      ])
      rowCounter++;
      }
    }
  }
  
}
