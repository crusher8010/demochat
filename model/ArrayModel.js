const mongoose = require('mongoose');

const ArraySchema = mongoose.Schema({
    title: {
        type: "String",
    },
    description: {
        type: "String"
    },
    input: {
        type: "String"
    },
    constraints: {
        type: Array
    },
    output: {
        type: "String"
    },
    sampleInput:{
        type: Array
    },
    sampleOutput:{
        type: Array
    },
    hints: {
        type: "String",
    },
    solution1: {
        type: "String"
    },
    solution2: {
        type: "String"
    }
});

const array = mongoose.model('arrays', ArraySchema);

module.exports = array;