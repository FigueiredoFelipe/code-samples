function testing(){
    const numbers = []

    if (!numbers.length){
        throw new Error('Should not be an empty array!')
    }

    console.log(numbers.length);
}

testing()