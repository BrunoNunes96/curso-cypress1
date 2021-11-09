//const { it } = require("mocha")

//it('nada agora', function(){})

// function soma (a, b){
  // return a+b;
 // }
 // const soma = function(a,b){
   // return a + b
 // }

// const soma = (a, b)=>{
   //return a+b;
// }

 // apenas com um parametro
const soma = a => a + a

console.log(soma(1,4))


// usando o this para o contexto
it('A function test..', function(){
  console.log('Function',this)
})