let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNumeros(a: number, b: number, printarResultado: boolean, frase: string){
   const result = a + b;
   if(printarResultado){
    console.log(frase + result);
   }
   return result
}

let printarResultado = true;
let frase: string;
frase = "O número é "

if(button){
    button.addEventListener('click', () =>{
        if(input1 && input2){
            console.log(somarNumeros(Number(input1.value), Number(input2.value), printarResultado, frase));
        }
    })
}