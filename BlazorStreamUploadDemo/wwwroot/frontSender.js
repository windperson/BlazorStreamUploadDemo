function* generateStreamCharGenerator(srcStrng, chunkSize) {
    for (let i = 0; i < srcStrng.length; i += chunkSize) {
        let ret = srcStrng.slice(i, i + chunkSize);
        if (i + chunkSize >= srcStrng.length - 1) {
            return ret;
        }
        yield ret;
    }
}

// noinspection JSUnusedGlobalSymbols
export function createStreamGenerator(inputId, chunkSize) {
    let source = document.getElementById(inputId).value;
    return generateStreamCharGenerator(source, chunkSize);
}