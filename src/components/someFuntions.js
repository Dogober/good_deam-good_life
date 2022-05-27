const reForEmail = /([a-zA-Z0-9]\.?){5,29}\w@([a-z]+\.[a-z]+)/g
const reForPhone = /\+\d{12}/g
const reForName = /[А-Я][а-я]+/g
const validityCheck = (re, field) => {
    let validityAr = field.match(re)
    console.log(validityAr)
    return validityAr && validityAr[0] === field ?true :false
}
console.log(validityCheck(reForName, ''))