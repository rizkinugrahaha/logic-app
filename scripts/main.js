function ArrSum(arr = []) {
  let newArr = [];

  if (arr.length > 0) {
    arr.map((i) => {
      if (i % 2 === 0) {
        newArr.push(i * 2)
      }

      if (i % 2 !== 0) {
        newArr.push(i * 3)
      }
    })

    document.getElementById("firstResult").innerHTML = `[${newArr}]`;
  }
}

function ArrMutate(arr = []) {
  let newArr = [];

  if (arr.length > 0) {
    arr.map((i) => {
      if (i % 3 === 0 && i % 7 === 0) {
        newArr.push('link aja');
      } else if (i % 3 === 0) {
        newArr.push('link');
      } else if (i % 7 === 0) {
        newArr.push('aja');
      } else {
        newArr.push(i);
      }
    })

    document.getElementById("lastResult").innerHTML = `${newArr}`;
  }
}

function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return (s * s == x);
}

function isFibo(n) {
  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return true;
  }

  return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
}

document.getElementById('firstButton').onclick = function (e) {
  e.preventDefault();
  const joinString = document.getElementById('firstLogicInput').value.split(',').map(Number);

  ArrSum(joinString);
}

document.getElementById('secondButton').onclick = function (e) {
  e.preventDefault();
  const res = document.getElementById('secondLogicInput').value;

  document.getElementById("secondResult").innerHTML = isFibo(res);
}

document.getElementById('lastButton').onclick = function (e) {
  e.preventDefault();
  const joinString = document.getElementById('lastLogicInput').value.split(',').map(Number);

  ArrMutate(joinString);
}