// bài 1
function giaTri(mark) {
  if (mark >= 85 && mark <= 100) {
    return "A";
  } else if (mark >= 70 && mark < 85) {
    return "B";
  } else if (mark >= 40 && mark < 70) {
    return "C";
  } else if (mark >=0 && mark < 40) {
    return "D";
  } else {
    return "Không hợp lệ"
  }
}
console.log("Đáp án là:", giaTri(60));



// bài 2
function num(a, b) {
  if (a > b) {
    return a;
  } else {
    return b
  }
}
console.log("Số lớn hơn là:", num(65, 90))



// bài 3
function checkNumber(a) {
  if (a > 0) {
    return "Số Dương";
  } else if (a < 0) {
    return "Số Âm";
  } else {
    return "0"
  }
}
console.log(checkNumber(88))



// bài 4
function is0dd(number) {
  if (number % 2 !==0) {
    return "là số lẻ";
  } else {
    return "là số chẵn"
  }
}
console.log(is0dd(8))




// bài 5
function checkb(b) {
  if (b % 3 === 0 && b % 5 === 0) {
    return true;
  } else {
    return false
  }
}
console.log(checkb(45))



// bài 6
function checkSum(a, b, c) {
  if (c == a + b) {
    return true;
  } else {
    return false
  }
}
console.log(checkSum(3, 5, 8))