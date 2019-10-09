function ehMaior (idade) { 
    return new Promise(function(resolve, reject) { 
            
        setTimeout(function() {
            if(idade >= 18) {
                resolve();
            }
            else {
                reject();
            }
        }, 2000);

    })
}

ehMaior(16)
    .then(function () {
        console.log('É Maior que 18');
    })
    .catch(function() {
        console.log('É Menor que 18');
    })


 


    


