function globalErrorHandler(error, req, res, next) {
    if (error.name === "ValidationError") {
        let errors = {};

        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });

        return res.status(400).json(errors);
    }
    res.status(500).json({ message: "Something went wrong" });
}

module.exports = globalErrorHandler