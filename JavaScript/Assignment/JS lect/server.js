let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash","superman"]

let heropower = {
    thor: "hummer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`Hitesh is persent in all objects`);
}
console.log(myHeros.hitesh());
console.log(heropower.hitesh());

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hi`);
}

console.log(myHeros.heyHitesh());
// console.log(heropower.heyHitesh());


// inheritance

const User = {
    name: "top name",
    email: "top@gmail.com"
}

const Teacher = {
makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAAssistance = {
    makeAssignment: "jS Assignment",
    fulltime: true,
    __proto__: TeachingSupport
}
// Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TAAssistance.isAvailable);


String.prototype.truelength = function(){
    console.log(`true length is ${this.trim().length}`);
}

"hitesh    ".truelength()
"anurag    ".truelength()






