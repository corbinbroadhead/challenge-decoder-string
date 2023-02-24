// // Write your code below this line
const decoder = (code) => {
    let shift = Number(code[0]);
    let decoded = '';
    for (let i = 1; i < code.length; i++) {
        let strValue = code[i].charCodeAt() + shift;
        decoded += String.fromCharCode(strValue);
    }
    return decoded;
}

let firstCode = '1cqtl';
console.log(decoder(firstCode));