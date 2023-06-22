const Product = function(n, p, r){
    this.name = n;
    this.rating = r;
    this.price = p;
}
const p = new Product("Iphone", 200000, 5);
console.log(p);