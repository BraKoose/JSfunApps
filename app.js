var ks = [];

for(let a = 17; a > 15; a++){
    ks.push(function()  {
        console.log(a);
    })
}

ks.forEach(function(f){
    f();
})