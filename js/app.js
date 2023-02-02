console.log('CICLO FOR')

let number


for (let number = 1; number <= 100; number++) {
    // se multiplo di 15 stampo FizzBuzz
    if ((number % 3 == 0) && (number % 5 == 0)) {
        console.log('FizzBuzz')
    } 
    else {
         // se multiplo di 3 stampo Fizz
    if (number % 3 === 0){
        console.log('Fizz')
    }

	// se multiplo di 5 stampo Buzz
    if (number % 5 === 0){
        console.log('Buzz')
    }
}


}
