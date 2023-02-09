let num = Number(prompt("Enter a number"))

function addTwoDigits(dig){
    return dig%10 + Math.floor(dig/10)
}
console.log(addTwoDigits(num))
