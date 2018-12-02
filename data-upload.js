let fs = require('fs');


function addSaleData() {
  let saleData = fs.readFileSync('sales.json');
  let sd = JSON.parse(saleData);



}

function addAttendanceData() {
  let attendanceData = fs.readFileSync('attendance.json');
  let ad = JSON.parse(attendanceData);
}
