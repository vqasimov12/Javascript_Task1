let point = prompt("Enter score");
switch (true) {
  case point > 100 || point < 1:
    console.log("Invalid value");
    break;
  case point > 90:
    console.log("A");
    break;
  case point > 80:
    console.log("B");
    break;
  case point > 70:
    console.log("C");
    break;
  case point > 60:
    console.log("D");
    break;
  case point > 50:
    console.log("E");
    break;
  default:
    console.log("F");
    break;
}
