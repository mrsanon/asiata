function successfullMessage(msg) {
    return "β *ASIATA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *ASIATA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *ASIATA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
