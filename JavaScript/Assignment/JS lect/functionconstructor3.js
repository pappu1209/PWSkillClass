const Product = (n, p, r) =>{
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p = new Product("Iphone", 200000, 5);
console.log(p);

// the theory of this keyword pointing to calling context is not applicable with arrow function