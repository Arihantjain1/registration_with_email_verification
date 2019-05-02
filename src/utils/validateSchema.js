var Ajv = require('ajv');

class validateSchema {
    constructor() {
    }

    validate(order, schema) {
        var ajv = new Ajv({ allErrors: true, jsonPointers: true, removeAdditional: true });
        require('ajv-errors')(ajv);
        var validate = ajv.compile(schema);
        validate(order);
        return validate.errors;
    }
}

module.exports = validateSchema;
