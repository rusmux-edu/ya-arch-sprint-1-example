const printCompilationMessage = (status, port) => {
    let messageColor;
    let messageType;
    let browserMessage;

    switch (status) {
        case 'success': {
            messageColor = '\u001B[32m';
            messageType = 'Compiled successfully!';
            browserMessage = 'You can now view';
            break;
        }
        case 'failure': {
            messageColor = '\u001B[31m';
            messageType = 'Compilation Failed!';
            browserMessage = "You can't now view";
            break;
        }
        case 'compiling': {
            messageColor = '\u001B[94m';
            messageType = 'Compiling...';
            browserMessage = 'Compiling the';
            break;
        }
    }

    console.log(`\n\n
    ${messageColor}${messageType}\u001B[0m\n
    ${browserMessage} \u001B[1mRemote\u001B[0m in the browser.
    ${messageColor}${messageType}\u001B[0m\n
    \u001B[1mLocal\u001B[0m:  http://localhost:\u001B[1m${port}\u001B[0m
    \u001B[1mLocal\u001B[0m:  http://localhost:\u001B[1m${port}\u001B[0m\n\n
    `);
};

module.exports = printCompilationMessage;
