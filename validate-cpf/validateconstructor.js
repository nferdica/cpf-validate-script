// 705.484.450-52

/*

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Formula, para descobrir primeiro digito verificadoR do CPF)

Se o resultado da formula acima for maior que 9, considera-se o primeiro digito verificado = 0

Feito isso vamos para o calculo do segundo digito...

7x 0x 5x 4x 8x 4x 4x 5x 0x 5X
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo digito verificador do CPF)

Se o resultado da formula acima for maior que 9, considera-se o primeiro digito verificado = 0

705.484.450-52 === Comparar com o CPF original

/\D+/g = Representação numerica para tudo que não é número

*/


// Função construtora principal
function Validator(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpf.replace(/\D+/g, '')
        }
    })
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Método da constructor function Validator(), onde é feito as validações principais...
Validator.prototype.valida = function () {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const charOne = this.criaChar(cpfParcial);
    const charTwo = this.criaChar(cpfParcial + charOne)
    
    const newCpf = cpfParcial + charOne + charTwo
    
    return newCpf === this.cpfLimpo
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Método da constructor function Validator(), onde não permite que seja inserido nenhuma sequencia numerica, exemplo: (111.111.111-11)
Validator.prototype.isSequence = function () {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequence === this.cpfLimpo;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Método da constructor function Validator(), onde é feito o calculo dos digitos verificadores.
Validator.prototype.criaChar = function(cpfParcial) {
    
    const cpfArray = Array.from(cpfParcial)
    let regressAcum = cpfArray.length + 1
    
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressAcum * Number(val))
        regressAcum--;
        return ac;
    }, 0)

    const char = 11 - (total % 11)
    return char > 9 ? '0' : String(char); // Operação ternária, se o char for maior do que 9 vai retornar 0, caso contrario retorna o valor de char
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Onde é inserido o número do CPF.
const cpf = new Validator('705.484.450-52');
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Mensagem de saída!
if(cpf.valida()) {
    console.log('CPF válido!')
}else {
    console.log('CPF inválido!')
}
//----------------------------------------------------------------------------------------------------------------------------------------------------