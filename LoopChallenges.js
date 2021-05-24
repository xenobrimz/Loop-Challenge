
//1.
for(var i = 0; i < 20; i++){
    if(i%2!==0){
        console.log(i);
    }
}

//2.

for(var i = 0; i < 100; i++){
    if(i%3==0){
        console.log(i);
    }
}

//3.
var i = 4;
while(i != -5 ){
    console.log(i);
    i-= 1.5;
}

//4.
var sum = 0
for(var i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

//5.
var product = 1
for(var i = 1; i <= 12; i++){
    product *= i;
}
console.log(product);