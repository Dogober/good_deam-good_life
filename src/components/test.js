const whiteList = "qwertyuiopasdfghjklzxcvbnm0123456789.@_-"

const valueValidity = (value) => {
    const atIndex = value.indexOf('@')
    const dotIndex = value.indexOf('.')
    const lastDotIndex = value.lastIndexOf('.')
    const lastAtIndex = value.lastIndexOf('@')
    for (let i = 0; i < value.length; i++) {
        if (!whiteList.includes(value[i])) {
            console.log('запрещенный символ')
            return false
        }
    }
    if (atIndex !== lastAtIndex ||
        atIndex == -1 || dotIndex == -1 ||
        atIndex == 0 || dotIndex == 0 ||
        lastDotIndex < atIndex + 2 ||
        lastDotIndex + 3 > value.length
    ) {
        return false
    }
    return true
}
console.log(valueValidity('q@dogoberl.ll'));