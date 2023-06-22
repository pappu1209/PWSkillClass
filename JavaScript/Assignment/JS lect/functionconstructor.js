function Product(n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p = new Product("macbook", 150000, 5);
console.log(p);

let x ={
    p: Product
};

x.p("airpods", 2000, 5);
console.log(x);

/**
 * 1. this keyword in js is diff than other language
 * 2. this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we return the object reffered by this
 * - if you return a custom obj, then the custom obj is returned
 * - if dont return anything, then obj referred by this is returned
 */