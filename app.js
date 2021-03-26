var color = "red";
var speed = 20;

function go(){
    console.log("vroom");
}

var car = {
    color,
    speed,
    go(){
        console.log("vroom");
    }
};
console.log(car.speed);
console.log(car.color);
car.go();

