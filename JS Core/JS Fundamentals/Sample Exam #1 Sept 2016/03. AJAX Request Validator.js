function ajaxValidator(input) {
    input.pop();
    let decodeString = input.pop();
    let requests = [];
    for (let i = 0; i < input.length; i+=3) {
        let request = [], method = input[i], creds = input[i + 1], content = input[i + 2];
        request.push(method);
        request.push(creds);
        request.push(content);
        requests.push(request);
    }
    let methodPattern = /^Method: (GET$|POST$|PUT$|DELETE$)+/;
    let credsPattern = /^Credentials: (Basic|Bearer) ([A-Za-z0-9]+)$/;
    let contentPattern = /^Content: [A-Za-z0-9.]+$/;
    for (let request of requests) {
        if (!isValidRequest(request)) {
            console.log('Response-Code:400');
            continue;
        }
        let [method, creds, content] = request;
        let methodMatch = methodPattern.exec(method);
        let credsMatch = credsPattern.exec(creds);

        if (methodMatch[1] !== "GET" && credsMatch[1] === 'Basic') {
            console.log(`Response-Method:${methodMatch[1]}&Code:401`);
            continue;
        }
        if (!isDecoded(credsMatch, decodeString)) {
            console.log(`Response-Method:${methodMatch[1]}&Code:403`);
            continue;
        }
        console.log(`Response-Method:${methodMatch[1]}&Code:200&Header:${credsMatch[2]}`);
    }

    function isValidRequest(req) {
        let [method, creds, content] = req;

        return methodPattern.test(method) && credsPattern.test(creds) && contentPattern.test(content);
    }
    function isDecoded(match, decodeString) {
        let decodePairs = decodeString.split('').reduce(function(result, value, index, array) {
            if (index % 2 === 0)
                result.push(array.slice(index, index + 2));
            return result;
        }, []).map(x => x.join(''));
        let valid = true;
        for (let [num, char] of decodePairs) {
            let pattern = new RegExp(char.toLowerCase(), 'g');
            let letterTest;
            for (let i = 0; i < num; i++) {
                letterTest = pattern.exec(match[2].toLowerCase());
                if (letterTest === null) valid = false;
            }
            if (valid) {
                return true;
            }
        }
        return valid;
    }
}

let arr = [ 'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '0q3s',
    '' ];
let arr2 = ['Method: PUT',
'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
'Content: users.asd/1782452$278///**asd123',
'Method: POST',
'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
'Content: Johnathan',
'Method: DELETE',
'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
'Content: This.is.a.sample.content',
'2e5g',
'']

ajaxValidator(arr);