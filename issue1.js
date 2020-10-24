let num=1
while (num < 100) {
  if (num % 3 == 0 && num % 5 == 0){
      str="FizzBuzz"
      console.log(str + " " + num)
  } else if (num % 3 == 0) {
    str="Fizz"
    console.log(str + " " + num)
  } else if (num % 5 == 0) {
    str="Buzz"
    console.log(str + " " + num)
  } else {
  }
  num++
}