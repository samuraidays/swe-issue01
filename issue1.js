for (let num = 1; num < 100; num++){
  if (num % 3 == 0 && num % 5 == 0){
    str="FizzBuzz";
    console.log(str + " " + num);
  } else if (num % 3 == 0) {
    str="Fizz";
    console.log(str + " " + num);
  } else if (num % 5 == 0) {
    str="Buzz";
    console.log(str + " " + num);
  }
}