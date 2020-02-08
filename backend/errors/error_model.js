const ApplicationErrorName = "ApplicationError";

class ApplicationError extends Error {

    constructor(httpCode, cause, message) {
        super();
        super.name = ApplicationErrorName;
        this.httpCode = httpCode;
        this.cause = cause;
        this.message = message;
    }

    toString() {
        let resultStr = `Error Occurred\nHTTP Status: ${this.httpCode}\nMessage: ${this.message}`;
        if(this.cause) {
            resultStr += `\nCaused by: ${this.cause.stack}`;
        }
        return resultStr;
    }
}

module.exports = ApplicationError;