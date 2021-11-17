const { reject } = require("cypress/types/bluebird")
const { Callbacks } = require("cypress/types/jquery")

it('sem testes ainda',  () => { })

    const getSomething = () =>{
        return new Promisse((resolve, reject) =>{
            setTimeout(() => {
                resolve(12);
            }, 1000)
        })
        
    }

const system = () => {
    console.log('init');
    getSomething(some => console.log(` something is ${some}`))
    console.log('end');
    
}

system();