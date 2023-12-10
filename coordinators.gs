function setData(sheet, data, row, column) {
  sheet.getRange(row, column).setValue(data);
}

function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Coordinators");
  const data = sheet.getRange('A2:AO20').getValues();
  let outputCounter = 0;
  for (let i = 0; i < data.length; i++) {
    const list = data[i];
    const cord = list[0];
    //console.log(cord)
    for (let j = 0; j < list.length; j++) {
      const course = data[0][j];
      const state = list[j];
      if(state === true) {
        const row = 22+outputCounter;
        //sheet.getRange(row, column).setValues()
        setData(sheet, cord, row, 1)
        setData(sheet, course, row, 2)

        outputCounter++;
      }
    }
  }
}
