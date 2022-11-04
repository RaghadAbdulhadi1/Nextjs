import { CAPITAL_LETTER_FORMAT, CHARACTERS_FORMAT, EMAIL_FORMAT, NUMBERS_FORMAT, SMALL_LETTER_FORMAT, USER_NAME_FORMAT } from "./ValidatorsRegex";

interface User {
    [email: string]: string;
}

const validateEmail = (email: string): boolean => email.match(EMAIL_FORMAT) ? true : false;

const emailExists = (email: string, data: User): boolean => !data[email] ? true : false;

const validateSmallLetter = (password: string): boolean => password.match(SMALL_LETTER_FORMAT) ? true : false;

const validateCapitalLetter = (password: string): boolean => password.match(CAPITAL_LETTER_FORMAT) ? true : false;

const validateSpecialCharacters = (password: string): boolean => password.match(CHARACTERS_FORMAT) ? true : false;

const validateNumbers = (password: string): boolean => password.match(NUMBERS_FORMAT) ? true : false;

const validateUsername = (username: string): boolean => username.match(USER_NAME_FORMAT) ? true : false;

const validateConfirmPassword = (confirmPassword: string, password: string): boolean => confirmPassword === password ? true : false;

export {
    emailExists,
    validateCapitalLetter,
    validateConfirmPassword,
    validateEmail,
    validateNumbers,
    validateSmallLetter,
    validateSpecialCharacters,
    validateUsername,
};
