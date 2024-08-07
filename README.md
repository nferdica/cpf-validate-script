# **CPF Validator**

This is a JavaScript script for validating Brazilian CPF (Cadastro de Pessoas Físicas) numbers. The CPF is a document used in Brazil to identify individuals, and its validation is important to ensure the provided number is valid and follows the rules established by the Federal Revenue.

## Functionality

The script performs the following steps to validate a CPF:

1. **CPF Cleaning:** Removes all non-numeric characters from the CPF.
2. **Sequence Check:** Verifies if the CPF is a repetitive sequence of numbers (e.g., 111.111.111-11), which are considered invalid.
3. **Verifier Digit** Calculation: Calculates the two final verifier digits of the CPF using standard algorithms and compares them with the provided digits.
4. **Final Validation:** Returns whether the CPF is valid or invalid based on the calculations.

## Usage

To use the script, follow the example below. The script includes a main function `Validator` that should be instantiated with the CPF number to be validated. After the instance is created, call the `valida` method to check if the CPF is valid.

## Considerations

* **CPF Cleaning:** The CPF should be provided in the format 'XXX.XXX.XXX-XX' or as a continuous string of numbers.
* **Repetitive Sequences:** CPFs like '111.111.111-11' are considered invalid regardless of the calculations.
* **Verifier Digit Calculation:** The calculation is performed according to the standard algorithm used by the Federal Revenue.

## License

This script is provided "as is", without any warranties of any kind. Use it at your own risk.

Let me know if you need any adjustments or additional information!