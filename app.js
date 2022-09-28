
function limpiarArray(array){

    // let nuevoArray = []

    for (let i = 0; i < array.length; i++) {

        let nombre = array[i]
        
        for (let h = 0; h < nombre.length; h++){

            if (!isNaN(nombre[h])){
                array[i] = array[i].replace(nombre[h], '');
            }
        }
    }
 return array
}

function cleanArray(array) {
    const newArray = [];

    array.forEach(name => {
        let newName = '';

        [...name].forEach(letter => {
            if (isNaN(letter)) {
                newName = newName + letter;
            }
        });
        newArray.push(newName)
    });

    return newArray;
}



let nombres = ["andri", "fra1n3k" , "he3i1y","mor4en2o", "w3i6l8mer" ,"i3ri2s" ,"es4te5fa3ny" , "r3i6ca7rdo"]

console.log(cleanArray(nombres));
console.log(limpiarArray(nombres));






