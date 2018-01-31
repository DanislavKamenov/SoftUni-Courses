function mailValidation(mail) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;
    return pattern.test(mail) ? 'Valid' : 'Invalid'
}

console.log(mailValidation('valid@email.bg'));