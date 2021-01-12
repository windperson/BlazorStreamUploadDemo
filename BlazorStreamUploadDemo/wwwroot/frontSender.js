function* generateStreamCharGenerator(srcStrng) {
    for (let i = 0; i < srcStrng.length; i++) {
        let ret = srcStrng.charAt(i);
        if (i === srcStrng.length - 1) {
            return ret;
        }
        yield ret;
    }
}

// noinspection JSUnusedGlobalSymbols
export function createStreamGenerator(inputId) {
    let source = document.getElementById(inputId).value;
    return generateStreamCharGenerator(source);
}