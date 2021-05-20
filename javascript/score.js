let reset = document.getElementById('reset');

let int = document.getElementById('number');
let integer = 0;

let reverseadd = document.getElementById('reverseincrement');
let reverseremove = document.getElementById('reversedecrement');

let progressadd = document.getElementById('progressincrement');
let progressremove = document.getElementById('progressdecrement');

let gateadd = document.getElementById('gateincrement');
let gateremove = document.getElementById('gatedecrement');

let rolloveradd = document.getElementById('rolloverincrement');
let rolloverremove = document.getElementById('rolloverdecrement');

let boundaryadd = document.getElementById('boundaryincrement');
let boundaryremove = document.getElementById('boundarydecrement');

let touchadd = document.getElementById('touchincrement');
let touchremove = document.getElementById('touchdecrement');

let courseadd = document.getElementById('courseincrement');
let courseremove = document.getElementById('coursedecrement');

let selfrecoveryadd = document.getElementById('selfrecoveryincrement');
let selfrecoveryremove = document.getElementById('selfrecoverydecrement');

let assistedrecoveryadd = document.getElementById('assistedrecoveryincrement');
let assistedrecoveryremove = document.getElementById('assistedrecoverydecrement');

let pointoutadd = document.getElementById('pointoutincrement');
let pointoutremove = document.getElementById('pointoutdecrement');

let DNFadd = document.getElementById('DNFincrement');
let DNFremove = document.getElementById('DNFdecrement');

let DNSadd = document.getElementById('DNSincrement');
let DNSremove = document.getElementById('DNSdecrement');

reset.addEventListener('click', function(){
    integer =0;
    int.innerHTML = integer;
})

reverseadd.addEventListener('click', function(){
    integer +=1;
    int.innerHTML = integer;
})

reverseremove.addEventListener('click', function(){
    integer -=1;
    int.innerHTML = integer;
})

progressadd.addEventListener('click', function(){
    integer +=2;
    int.innerHTML = integer;
})

progressremove.addEventListener('click', function(){
    integer -=2;
    int.innerHTML = integer;
})

gateadd.addEventListener('click', function(){
    integer +=10;
    int.innerHTML = integer;
})

gateremove.addEventListener('click', function(){
    integer -=10;
    int.innerHTML = integer;
})

rolloveradd.addEventListener('click', function(){
    integer +=5;
    int.innerHTML = integer;
})

rolloverremove.addEventListener('click', function(){
    integer -=5;
    int.innerHTML = integer;
})

boundaryadd.addEventListener('click', function(){
    integer +=10;
    int.innerHTML = integer;
})

boundaryremove.addEventListener('click', function(){
    integer -=10;
    int.innerHTML = integer;
})

touchadd.addEventListener('click', function(){
    integer +=10;
    int.innerHTML = integer;
})

touchremove.addEventListener('click', function(){
    integer -=10;
    int.innerHTML = integer;
})

courseadd.addEventListener('click', function(){
    integer +=10;
    int.innerHTML = integer;
})

courseremove.addEventListener('click', function(){
    integer -=10;
    int.innerHTML = integer;
})

selfrecoveryadd.addEventListener('click', function(){
    integer +=3;
    int.innerHTML = integer;
})

selfrecoveryremove.addEventListener('click', function(){
    integer -=3;
    int.innerHTML = integer;
})

assistedrecoveryadd.addEventListener('click', function(){
    integer +=10;
    int.innerHTML = integer;
})

assistedrecoveryremove.addEventListener('click', function(){
    integer -=10;
    int.innerHTML = integer;
})

pointoutadd.addEventListener('click', function(){
    integer +=80;
    int.innerHTML = integer;
})

pointoutremove.addEventListener('click', function(){
    integer -=80;
    int.innerHTML = integer;
})

DNFadd.addEventListener('click', function(){
    integer +=20;
    int.innerHTML = integer;
})

DNFremove.addEventListener('click', function(){
    integer -=20;
    int.innerHTML = integer;
})

DNSadd.addEventListener('click', function(){
    integer +=50;
    int.innerHTML = integer;
})

DNSremove.addEventListener('click', function(){
    integer -=50;
    int.innerHTML = integer;
})