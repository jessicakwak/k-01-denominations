// alert("connected");
let input;

const setAmt = content => {
  input = content.value;
};

const calculate = num => {
  let q;
  const arr = [];
  while (getDenom(num) > 0) {
    q = Math.floor(num / getDenom(num));
    for (var i = 0; i < q; i++) {
      arr.push(getDenom(num));
    }
    num = num % getDenom(num);
  }
  console.log(arr);
  return arr;
};

const getDenom = amt => {
  return amt >= 10
    ? 10
    : amt < 10 && amt >= 5
    ? 5
    : amt < 5 && amt >= 1
    ? 1
    : amt < 1 && amt >= 0.5
    ? 0.5
    : amt < 0.5 && amt >= 0.2
    ? 0.2
    : amt < 0.2 && amt >= 0.1
    ? 0.1
    : amt < 0.1 && amt >= 0.05
    ? 0.05
    : 0.01;
};
