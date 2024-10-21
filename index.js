let point = prompt("Enter score");
switch (true) {
  case point > 100 || point < 1:
    console.log("Invalid value");
    break;
  case point > 90:
    console.log("Your grade is A");
    break;
  case point > 80:
    console.log("Your grade is B");
    break;
  case point > 70:
    console.log("Your grade is C");
    break;
  case point > 60:
    console.log("Your grade is D");
    break;
  case point > 50:
    console.log("Your grade is E");
    break;
  default:
    console.log("Your grade is F");
    break;
}
