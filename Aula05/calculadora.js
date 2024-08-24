let opt = document.querySelector("#operacoes");
let btn = document.getElementById("resultado");

function getCalc() {
  let result;
  switch (opt.value) {
    case "1":
      result = som();
    break;

    case "2":
      result = sub();
    break;

    case "3":
      result = mlt();
    break;

    case "4":
      result = div();
    break;
  }
  document.getElementById("resultado").innerHTML = result;
}

function getValue1() {
  return parseFloat(document.getElementById("PriVal").value);
}

function getValue2() {
  return parseFloat(document.getElementById("SegVal").value);
}

function som() {
  return getValue1() + getValue2();
}

function sub() {
  return getValue1() - getValue2();
}

function mlt() {
  return getValue1() * getValue2();
}

function div() {
  return getValue1() / getValue2();
}