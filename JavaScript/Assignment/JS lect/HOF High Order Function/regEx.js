let pattern = 'pw'

let regExone = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pkskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult)

const webUrl = "https://pwskils.com/hitesh%20choudhary"
const useableUrl = webUrl.replace(/%\d0/, '-')
console.log(useableUrl)