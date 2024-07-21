export const responseData = (statusCode, message, content, response) => {
    response.status(statusCode).json({
        statusCode,
        message,
        content,
        date: new Date()
    })
}