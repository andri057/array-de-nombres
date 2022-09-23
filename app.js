
function limpiarArray(array){

    let nuevoArray = [];

    for (let i = 0; i < array.length; i++) {

        let nombre = array[i]
        
        for (let h = 0; h < nombre.length; h++){

            if(Number(h)){
                h.replace(1234567890,"");
                console.log(array)
            }
        }      
    }
 return array
}



let nombres = ["andri", "fra1n3k" , "he3i1y","mor4en2o", "w3i6l8mer" ,"i3ri2s" ,"es4te5fa3ny" , "r3i6ca7rdo"]

limpiarArray(nombres)






