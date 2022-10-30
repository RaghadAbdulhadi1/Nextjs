const EMAIL_FORMAT: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const USER_NAME_FORMAT: RegExp = /^[a-z][a-z0-9_]+[a-z0-9]$/g;
const SMALL_LETTER_FORMAT: RegExp = /[a-z]/g;
const CAPITAL_LETTER_FORMAT: RegExp = /[A-Z]/g;
const NUMBERS_FORMAT: RegExp = /[0-9]/g;
const CHARACTERS_FORMAT: RegExp = /\W/g;

export {
    EMAIL_FORMAT,
    USER_NAME_FORMAT,
    SMALL_LETTER_FORMAT,
    CAPITAL_LETTER_FORMAT,
    NUMBERS_FORMAT,
    CHARACTERS_FORMAT
}
