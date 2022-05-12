const obj = {value: "", blurHanler: false}
const map = new Map([["surname", obj], ["name", obj], ["beMarried", false]])
const updateMapState = (map) => {
    const mapCopy = new Map()
    for (let dataField of map.keys()) {
        if (typeof(map.get(dataField)) == 'object') {
            mapCopy.set(dataField, {...map.get(dataField)})
        } else {
            mapCopy.set(dataField, map.get(dataField))
        }
    }
    mapCopy.get("name").value = "Nick"
    return mapCopy
}
console.log(updateMapState(map));