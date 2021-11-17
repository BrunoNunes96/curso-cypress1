//<reference type="cypress"/>





it('Um teste externo',() => {  // faz esexutar apenas esse teste, sempre pega o ultimo only

})

// serve para agrupar testes
describe('Shold group test',() =>{

    describe('Testes mais especificos',()=>{
        it('Um teste externo',() => {   // skip lista um teste ou grupo para que nao seja executado

        })

    })
    
        it('Um teste interno',() => {

    })

})