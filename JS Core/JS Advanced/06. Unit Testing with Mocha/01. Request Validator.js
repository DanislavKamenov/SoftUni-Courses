function validateRequest(request) {
    const VALID_METHODS = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const VALID_VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let invalidParam = undefined;
    if  (!VALID_METHODS.includes(request.method)) {
        invalidParam = 'Method';
        throw new Error('Invalid request header: Invalid ' + invalidParam);
    }
    if (!request.uri || !/^[[\w.*]+$/g.test(request.uri)) {
        invalidParam = 'URI';
        throw new Error('Invalid request header: Invalid ' + invalidParam);
    }
    if  (!VALID_VERSIONS.includes(request.version)) {
        invalidParam = 'Version';
        throw new Error('Invalid request header: Invalid ' + invalidParam);
    }
    if (!request.message || !/^[^<>\\&'"]*$/g.test(request.message)) {
        if(request.message === ''){
            return request;
        }
        invalidParam = 'Message';
        throw new Error('Invalid request header: Invalid ' + invalidParam);
    }
    return request;
}

validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
});



