let fs = require('fs');


function addSaleData() {
  let saleData = fs.readFileSync('sales.json');
  let sd = JSON.parse(saleData);

  console.log('IN JAVA SCRIPT SALES');



}

function addAttendanceData() {
  let attendanceData = fs.readFileSync('attendance.json');
  let ad = JSON.parse(attendanceData);

    console.log('IN JAVASCRIPT ATTEN');
}
