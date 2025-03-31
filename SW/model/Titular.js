class Titular{
    constructor (nome, cpf, endereco, telefone, email, dataNasc){
        this.nome=nome
        this.cpf=cpf
        this.endereco=endereco
        this.telefone=telefone
        this.email=email
        this.dataNasc=dataNasc
    }
}
function buscarTitulares(){
let titular1 = new Titular('João Quebrado',  '5663535-63', 'Rua da Sorte', '11 190', 'quebrado@gmail.com', '29.08.63'  )     
let titular2 = new Titular( 'Coelho Sabido', '5665353-36', 'Rua da Azar', '11 156', 'coelho@gmail.com',  '30.08.1998'  )
let titular3 = new Titular('wagner Curinthia', '3336669-69', 'Itaquera',  '11 196', 'curinthiawagner@gmail.com', '30.08.1998'  )    
let titulares = [titular1, titular2, titular3] 

return titulares

}



export {Titular, buscarTitulares}