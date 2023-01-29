const array = require('../model/ArrayModel');

exports.getArrayQuestions = async (req, res) => {
    try {
        const arrayQuestions = await array.find();

        res.status(200).json({
            status: "success",
            results: arrayQuestions.length,
            arrayQuestions,
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            err
        })
    }
}