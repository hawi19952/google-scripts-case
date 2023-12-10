const yearMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const allLocations = ["Jeddah","Riyadh", "Dammam","Al-Khobar"];

function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Trainers");



  const data = sheet.getRange("A2:J45").getValues();
  let setCounter = 0;
  const startRow = 53;
  for (let i = 0; i < data.length; i++) {
    const elm = data[i];
    const trainer = elm[0];
    const course = elm[1];
    const lang = elm[2];
    const rate = elm[9];
    const avail = elm[3];
    const availSplit = avail.split(",");

    let months = [];
    if(avail === "All months") {
      months = yearMonths;
    }
    else if (availSplit.length > 1) {
      for(let x = 0; x < availSplit.length; x++) {
        months.push(availSplit[x]);
      }
    }
    else {
      months.push(avail);
    }

    const loc = elm[8];
    const locSplit = loc.split(",");
    let locations = [];
    if(loc === "All locations") {
      locations = allLocations;
    }
    else if (locSplit.length > 1) {
      for (let x = 0; x < locSplit; x++) {
        locations.push(locSplit[x]);
      }
    }
    else { 
      locations.push(loc);
    }

    for (let y = 0; y < months.length; y++) {
      let month = months[y];
      for (let x = 0; x < locations.length; x++) {
        let location = locations[x]
        let id = setCounter+1;
        const row = startRow + setCounter;
        sheet.getRange(row, 1).setValue(id);
        sheet.getRange(row, 2).setValue(month);
        sheet.getRange(row, 3).setValue(course);
        sheet.getRange(row, 4).setValue(trainer);
        sheet.getRange(row, 5).setValue(lang);
        sheet.getRange(row, 6).setValue(location); 
        sheet.getRange(row, 7).setValue(rate); 
        setCounter++;
      }
    }


  }
}
