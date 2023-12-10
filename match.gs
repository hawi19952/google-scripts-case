function getSimilars(sub, pos) {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Employees Data");
  const data = sheet.getRange("G2:J").getValues();
  const subEmps = data.filter(d => d[3].includes(sub));
  const posEmps = subEmps.filter(s => s[0].includes(pos))
  console.log(posEmps.length)
  return posEmps.length;
}

getSimilars("Restaurants", "General Manager ");

function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Course Match");
  const data = sheet.getRange('A1:AP78').getValues();
  let outputCounter = 80;
  const courses = data[0];
  for (let i = 1; i < data.length; i++) {
    const position = data[i];
    const subside = position[0];
    const title = position[1];

    const positionCourses = [subside,title];

    for (let j = 2; j < courses.length; j++) {
      const courseName = courses[j];
      const courseState = position[j];
      if(courseState) {
        positionCourses.push(courseName);
      }
    }
    const column = positionCourses.length;
    sheet.getRange(outputCounter, 1, 1, column).setValues([positionCourses])
    outputCounter++;
  }
}
