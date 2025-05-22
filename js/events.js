console.log("this is a separate js file");

function clickMe() {
  const num1Input = document.getElementById("number1");
  const num2Input = document.getElementById("number2");
  const sumInput = document.getElementById("sum");
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const sum = num1 + num2;

  sumInput.value = sum;
  sumInput.style.backgroundColor = "red";
  sumInput.style.color = "white";
  console.log(sum);
  console.log("ami bolod");
  console.log("ami gadha");
}
