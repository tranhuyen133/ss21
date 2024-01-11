var math = parseFloat(prompt("Nhập điểm  toán"))
var english = parseFloat(prompt("Nhập điểm anh"))
var literature = parseFloat(prompt("Nhập điểm văn"))
var dtb = (math + english + literature)/3;
if(8<dtb&&dtb<=10){
    console.log('Gioi');
}
else if(6.5<dtb && dtb <8){
    console.log('Khá');

}
else if(5<dtb && dtb<6.4){
    console.log('Trung bình');

}
else (0<dtb && dtb<5){
    console.log('Yếu');
}

