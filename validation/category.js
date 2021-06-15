const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCategoryInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, {min: 2, max: 20})) {
        errors.text = 'Category name must be between 2 and 20 letters!';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Category name can not be blank!'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}