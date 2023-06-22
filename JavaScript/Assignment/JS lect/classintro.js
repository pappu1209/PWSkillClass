class Product {
    // Properties -> variable -> data member
    // name;
    // price;
    // rating;

// private methode
    #rating;
    constructor(n, p, r) {
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.#rating = r;
        // return 10; if you're returning primitive then if will be avoid in constructor
        // return {x: 10, y:20} // if yore return non premitive then it will be returned
    }

//  static methode
    static custom(){
        console.log("calling a static methode")
    }
    // getter and setter methode ++++++++++++++++++++++++++++

    getRating(){
        console.log(this.#rating);
    }
    setRating(r){
        if (r < 0)return;
        this.#rating = r;
    }




    // behaviours -> function -> member functions
    dispaly(){
        console.log("displaying the current produc", this.name, this.price, this.#rating);
    }
}

const p = new Product("iphone", 10000, 5);  // new -> creates an empty plain object
// -> in the above piece of code we are calling the constructor method
console.log(p)
p.setRating(10);
p.getRating();
p.dispaly()
Product.custom()