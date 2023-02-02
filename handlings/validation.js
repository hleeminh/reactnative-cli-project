const isValidEmail = (stringEmail) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))            
}

const isValidPassword = (stringPassword) => {
    return stringPassword.length >=3;
}

export {isValidEmail, isValidPassword};
