export const linkText = (formType: string): string => {
    return formType === "login" 
    ? "Register" : "Login";
}

export const formSwitchText = (formType: string): string => {
    return formType === "login" 
    ? "Not a member? "
    : "Already registered? ";
}

export const registerLoginNavigation = (formType: string): string => {
    return formType === "login" 
    ? "./register"
    : "./login";
}

