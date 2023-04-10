



// 1 = NÃO    0 = SIM

const numero = 10;

const numeroPar = (numero % 5) === 0;

if(numero === 0) {
    console.log('este numero e invalido')
} else if (numeroPar){
    console.log('par')
} else {
    console.log('impar')
}