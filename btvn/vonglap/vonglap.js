//  Bài 1
let name = "Vietnam ";
function copy(name) {
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += name;
    }
    return result;
  }
let result = copy(name);
console.log(result);



//  Bài 2
let str = "hello";
function copyStr(str) {
    let repeat = '';
    for (let i = 0; i < 9; i++) {
      repeat += str + '-';
    }
    repeat += str;
    return repeat;
  }
console.log(copyStr(str));



//  Bài 3
function repeatString(st, n) {
  let rep = '';
  for (let i = 0;  i < n - 1;  i++) {
    rep += st + '-';
  }
  rep += st;
  return rep;
}
console.log(repeatString("Hanoi", 5));



//  Bài 4
function sum5() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sum5());



//   Bài 5
let r = 10;
function V(r) {
  let volume = (4/3) * Math.PI * Math.pow(r, 3);
  return volume;
}
console.log(`Thể tích của hình cầu là: ${V(r)}`);



//  Bài 6
function sumab(a, b) {
  let sum = 0;
  if ( a < b ){
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  } else {
  for (let i = b + 1; i < a; i++) {
    sum += i;
  }};
  return sum;
}
console.log((sumab(3, 8)), (sumab(8, 3)));



//  Bài 7
function check(n) {
  if (n < 2) {
    return false;
  } else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}}
console.log(check(11));




//  Bài 8
function num(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumNumber(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (num(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumNumber(17));




//  Bài 9
function sumN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumN(8));