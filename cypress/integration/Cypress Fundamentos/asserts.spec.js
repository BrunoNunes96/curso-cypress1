///<reference types="cypress"/>




it('equality',()=>{
    const a = 1

    expect(a).equal(1);
    expect(a,'deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');  // negação no teste
})

// teste se é verdadeiro ou nao

it('truthy', () =>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(a).to.be.true;
    expect(b).to.be.null;

    expect(c).to.be.undefined;
})

// verificando a equalidade de objetos

it('Object Equality',()=>{
const obj = {
    a: 1,
    b: 2,
}
expect(obj).equals(obj);
expect(obj).to.be.deep.equals({a: 1, b: 2});  // deep compara diretamento com os parametros
expect(obj).eql({a: 1, b: 2});
expect(obj).include({a: 1}) // verificando se apenas o atributo a esta preenchido
expect(obj).to.have.property('b', 2); // verificando diretamente na propriedade
expect(obj).to.not.be.empty; // verificando se nao esta vazio

})


// verificando itens do tipo array
it('Arrays',()=>{
    const arr = [1,2,3];
    expect(arr).to.have.members([1,2,3]);
    expect(arr).to.include.members([1,3]);
    expect(arr).to.not.be.empty;
})

it('types',()=>{
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('String')
    expect({}).to.be.an('Object')
    expect([]).to.be.an('Array')
})

it('String',()=>{
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)  // verificando se tem o 'de' esta na string
    expect(str).to.match(/^String/) // verifica o inicio da string
    expect(str).to.match(/teste$/) // verifica o final da string
})

it('number',()=>{
    const number = 12
    const floarNumber = 4.54

    expect(number).to.be.equal(12)
})