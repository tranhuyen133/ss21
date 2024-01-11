var day = parseInt(prompt("Nhập ngày"));
var month = parseInt(prompt("Nhập tháng"));
var year = parseInt(prompt("Nhập năm"));
if (0<day<31 && month <12 && year > 0){
    console.log(`ngày ${day} tháng ${month} năm ${year} `)
}
else{
    console.log('không phù hợp')
}