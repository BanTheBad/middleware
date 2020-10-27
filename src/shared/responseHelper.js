class ResponseHelper{
    /**
     * @function
     * @description A simple API response helper
     *
     * @param {Object} req Express request object
     * @param {Object} res Express response object
     * @param {Number} status HTTP status code
     * @param {Boolean} error Flag for error
     * @param {Object} data Response data object
     * @param {String} message Response message to client
     *
     * @returns {Object} Response from the server
     */

    static sendResponse(
        req,
        res,
        status,
        error = false,
        data = {},
        message = ""
    ){
        let response = {
            data: data ? data : null,
            error: error ? true : false
        }

        switch (status){
            case 200:
                response["message"] = message ? message : "Successful";
                break;
            case 201:
                response["message"] = message ? message : "Created Successfully";
                break;
            case 204:
                break;
            case 400:
                response["error"] = true;
                response["message"] = message ? message : "Invalid Request Format";
                break;
            case 401:
                response["error"] = true;
                response["message"] = message ? message : "Unauthorized Access";
                break;
            case 403:
                response["error"] = true;
                response["message"] = message ? message : "Forbidden";
                break;
            case 404:
                response["error"] = true;
                response["message"] = message ? message : "Resource Not Found";
                break;
            case 405:
                response["error"] = true;
                response["message"] = message ? message : "Method Not Allowed";
                break;
            case 500:
                response["error"] = true;
                response["message"] = message ? message : "Internal Server Error";
                break;
            default:
                status = 204;
        }

        return res.status(status).json(response)

    }
}

module.exports = ResponseHelper;