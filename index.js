const userAge = Number(prompt(`Hi user, what's your age?`))
const userKm = Number(prompt(`How far are u traveling (in km):`))
const pricePerKm = 100

function juniorPassager(age){
    if(age < 18) return true
    return false
}
function juniorDiscoutPrice(userKm, pricePerKm){
    if(juniorPassager(userAge)){
       return (userKm * pricePerKm) * 0.8
    }
}
function seniorPassager(age){
    if(age >= 65) return true
    return false
}
function seniorDiscoutPrice(userKm, pricePerKm){
    if(seniorPassager(userAge)){
       return (userKm * pricePerKm) * 0.6
    }
}

function showMessageToUser(age, km){
    if(juniorPassager(age)){
        return `Hi user, the full price for the ride is ${pricePerKm * km}$\n but you are ${age} years old and you get 20% discount, total price is: \n ${juniorDiscoutPrice(km,pricePerKm)}$`
    }else if(seniorPassager(age)){
        return `Hi user, the full price for the ride is ${pricePerKm * km}$\n but you are ${age} years old and you get 40% discount, total price is: \n ${seniorDiscoutPrice(km,pricePerKm)} $`
    }else{
        return `Hi user, the full price for the ride is ${pricePerKm * km}$`
    }
}


console.log(showMessageToUser(userAge, userKm))