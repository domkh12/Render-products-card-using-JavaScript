let a = 10;
a += 10;
a -= 10;
a /= 2;
a *= 2;
a %= 3;
a **= 4;
console.log(a);

// ==================================

let b = 10;
let c = 3;

console.log(b + c);
console.log(b - c);
console.log(b * c);
console.log(b / c);
console.log(b % c);
console.log(b++);
console.log(--c);
console.log(b**3);

// ======================================

let d = null;
d ??= "Default value";
console.log(d);

// =====================================

let e = null;
const result1 = e ?? 'Second Default value';
console.log(result1);

// =====================================

if(undefined) console.log('Never print')

// ===================================

let f = '';
let result = f || 'Default value'
console.log(result);

// ==================================

let product = {
    name: 'Product 1',
    price: 10,
    
    details: {
        model: 'XS',
        color: 'gold'
    }    
}

console.log(product.details.color);



