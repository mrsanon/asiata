function successfullMessage(msg) {
    return "✅ *ASIATA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *ASIATA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *ASIATA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
