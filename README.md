# **CPF Validator**

This repository contains two JavaScript implementations for validating Brazilian CPF (Cadastro de Pessoas Físicas) numbers. The CPF is used to identify individuals in Brazil, and validating it ensures that the number is correct according to established rules.

## Functionality

Both implementations perform the following steps to validate a CPF:

1. **CPF Cleaning:** Remove all non-numeric characters from the CPF.
2. **Sequence Check:** Verify if the CPF is a repetitive sequence of numbers (e.g., 111.111.111-11), which are considered invalid
3. **Verifier Digit** Calculate the two verifier digits of the CPF using the standard algorithms and compare them with the provided digits.
4. **Final Validation:** Return whether the CPF is valid or invalid based on the calculations.

## Class-Based Implementation

This implementation uses ES6 classes to create a `Validator` class. Here’s how it works:

```
// Creating the main class
class Validator {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            get: function() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    // Method for primary validation
    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequence()) return false;
    
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const charOne = this.criaChar(cpfParcial);
        const charTwo = this.criaChar(cpfParcial + charOne)
    
        const newCpf = cpfParcial + charOne + charTwo
    
        return newCpf === this.cpfLimpo
    }

    // Method to check for repetitive sequences
    isSequence() {
        const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequence === this.cpfLimpo;
    }

    // Method to calculate verifier digits
    criaChar(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressAcum = cpfArray.length + 1
    
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressAcum * Number(val))
            regressAcum--;
            return ac;
        }, 0)

        const char = 11 - (total % 11)
        return char > 9 ? '0' : String(char);
    }
}

// Usage example
const cpf = new Validator('705.484.450-52');

if(cpf.valida()) {
    console.log('Valid CPF!')
} else {
    console.log('Invalid CPF!')
}

```
## Constructor Function-Based Implementation

This implementation uses the older constructor function approach to create a `Validator` function. Here’s how it works:

```
// Main constructor function
function Validator(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpf.replace(/\D+/g, '')
        }
    })
}

// Method for primary validation
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

// Method to check for repetitive sequences
Validator.prototype.isSequence = function () {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequence === this.cpfLimpo;
}

// Method to calculate verifier digits
Validator.prototype.criaChar = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressAcum = cpfArray.length + 1
    
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressAcum * Number(val))
        regressAcum--;
        return ac;
    }, 0)

    const char = 11 - (total % 11)
    return char > 9 ? '0' : String(char);
}

// Usage example
const cpf = new Validator('705.484.450-52');

if(cpf.valida()) {
    console.log('Valid CPF!')
} else {
    console.log('Invalid CPF!')
}

```

## Notes

* **CPF Cleaning:** CPF should be provided in the format 'XXX.XXX.XXX-XX' or as a continuous string of numbers.
* **Repetitive Sequences:** CPFs like '111.111.111-11' are considered invalid regardless of the calculations.
* **Verifier Digit Calculation:** The calculations follow the standard algorithm used by the Federal Revenue.

## License

This script is provided "as is", without any warranties of any kind. Use it at your own risk.

Feel free to adjust or add any additional information as needed!