function GideonKoose(){
    return {
        color:"Pink",
        name:"Botwe",
        state: "Kumerica",
        position: "Best Buddy"
    }
}

var {name, state} = GideonKoose();

console.log(state)
console.log(name)

var [first ,,,, fifth]= ["pink", "yellow", "blue", "orange", "green"]
console.log(first);
console.log(fifth);

var people = [
    {
        "firstName": "Koose",
        "lastName": "Bra",
        "company": "Trotro.Live",
        "email":"KooseTheBlogger@gmail.com",
        "address": "Gye Street, Taifa."
    },
    {
        "firstName":"Andy",
        "lastName":"Ekwow",
        "company":"Programmer @ Trotro.Live",
        "email":"luicfer@gmail.com",
        "address": "KNUST Orange Hostle"
    },
]

people.forEach(({email})=> console.log(email))