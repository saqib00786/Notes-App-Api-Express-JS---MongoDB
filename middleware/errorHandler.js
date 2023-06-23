import constants from "../constants.js";

export const errorHandler = (err, req, res, next) => {
    console.log(err.stack.red);
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status({
                title: 'Validation Error',
                message: err.message,
                stackTrace: err.stack
            })
            break
        case constants.SERVER_ERROR:
            res.status({
                title: 'Server Error',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.status({
                title: 'Not Found',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.status({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.status({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.CREATED:
            res.status({
                title: 'Created',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case constants.SUCCESS:
            res.status({
                title: 'Success',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        default:
            res.status({
                title: 'Server Error',
                message: err.message,
                stackTrace: err.stack
            })
    }
}