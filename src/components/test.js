const ar = [{id: 1, number: 1}, {id: 2, number: 1}]

const sumWithInitial = (array) => {
   for (let i = 0; i < array.length; i++) {
      if (array[i].id === 1) {
         array[i].number = 2
      }
   }
   return array
}

console.log(sumWithInitial(ar));
