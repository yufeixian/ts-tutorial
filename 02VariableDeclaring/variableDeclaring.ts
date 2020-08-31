// var

function b() {
    a; // capturable
}

var a = 1;

var a = 2; // redefinable

if (b) {
    var c = 2;
}
c; // capturable

// scoping

try {
    throw 'stop'
} catch(e) {
    e; // capturable
}
// e; // err: undefined, un-capturable

// let

function d() {
    f; // capturable
}

d(); // illegal because f isn't defined

let f = 1;

d(); // ok

// let f = 2; // unredefinable

// const


const g = 3; // readonly
// const g = 4; // unredefinable

const h = {
    a: 1,
    b: 1,
    c: 2
}

// h = { a, c, f }; // err: h is readonly
h.a = a; // ok
h.b = c; // ok
h.c = f; // ok

// destructing


let i = [1, 2, 3, 4];

let [j, k] = i; // j: 1, k: 1

let {splice, slice} = i; // ok

let [,l,m,,n,o,,,p,q] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // l: 2, m: 3, n: 5, o: 6, p: 9, q: 10

let r: [number, string, boolean] = [1, "\1", true];

let [s, t, u] = r; // types: s: number, t: string, u: boolean

let {length: v, forEach: w} = i; // new variables: v, w

// spreading


let x = [1, 2, 3, 4];
let y = [-1, -2, -3, -4];
let z = [...y, 0, ...x]; // [-1, -2, -3, -4, 0, 1, 2, 3, 4];
let aa = { ...x, name: 'aa' }; // [1, 2, 3, 4, name: 'aa'];