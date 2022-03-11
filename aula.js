//**CALLBACKS: define uma função mas não chama ela especificamente 
//INFERNO DE CALLBACKS
// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {

//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } 
//         else {
//             console.log(conteudo.toString());
//             //processamento
//             const dobro = +conteudo.toString() * 2;
//             const finalizar = function (erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//         }
//     };

//     //segundo parametro: função callback
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// abrirArquivo("arquivo.txt");

//**PROMISE
// function exemplo(){
//     return 1;
// }

// const resultado = exemplo()
// console.log(resultado)

// function exemplo(){
//     let promise = new Promise(
//         function(resolve, reject){
//             resolve(1)
//     });
//     return promise
// }

// const resultadoFuturo = exemplo()
// //then: E então quando essa função tiver executada faça isso 
// resultadoFuturo.then((resultado) => console.log(resultado))

//1+2 ... + n-1 + n
// function calculoDemorado(n){
//     let promise = new Promise((resolve,reject)=>{
//         if(n<0){
//             reject("Somente valores positivos")
//         }else{
//             let res = 0
//             for(let i=1;i<=n;i++ ){
//                 res += i
//             }
//             resolve(res)
//         }
//     })
//     return promise
// }

// calculoDemorado(-10)
// .then((res)=>{
//     console.log("Ok, deu certo "+res)
// })
// .catch(erro => {
//     console.log("Falhou: "+ erro)
// })

// const resultadoFuturo = calculoDemorado(10)
// resultadoFuturo.then((res) => console.log(res))

function calculoRapidinho(n){
    return Promise.resolve((n*(n+1))/2)
}
calculoRapidinho(10).then((res) => console.log(res))

function f(n){
    return new Promise((resolve,reject) =>{
        resolve((n*(n+1))/2)
    })
}

f.then((res) => console.log(res))
