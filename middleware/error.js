const errorHandler = (err, req, res, next) => {
    console.log(err.statusCode)
    console.log(err.message)

    if (err.statusCode === 404) {
        res.status(404).json({
            success: false,
            error: err.message || 'Not found'
        })
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Internal server error'
    })
}

module.exports = errorHandler
