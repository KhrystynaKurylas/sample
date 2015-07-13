function square_equation() {
    var a=9;
    var b=12;
    var c=4;
    var d = b * b - 4 * a * c; //Дискримінант
    console.log(d);
    if (d > 0) {
        var x1 = (-b + Math.sqrt(d)) / 2 * a;
        var x2 = (-b - Math.sqrt(d)) / 2 * a;
        console.log('x1='+x1, 'x2='+x2);
        alert('x1='+x1+' '+'x2='+x2);
    }
    else {
        if (d ==0) {
            var x = -b / (2 * a);
            console.log('x='+x);
            alert('x='+x);
        }
        else {
            console.log('not result');
            alert('not result');
        }
    }
}
function fib() {
    var n=10;
    var fib1 = 1;
    var fib2 = 1;
    for ( var i= 0; i<n; i++) {
        if (i == 0 || i == 1 ) {
            console.log(1);
            alert(1);
             }
        else {
            var fib_sum = fib2 + fib1;
            fib1 = fib2;
            fib2 = fib_sum;
            console.log(fib_sum);
            alert(fib_sum);
        }
    }
}


