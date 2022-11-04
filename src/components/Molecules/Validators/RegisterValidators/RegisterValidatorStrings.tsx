/* eslint-disable @typescript-eslint/naming-convention */

const VALIDATION_CONTENT = {
  CONFIRM_PASSWORD_CHECK: "Passwords doesn't match",
  EMAIL_ADDRESS_CHECK: "Valid email",
  PASSWORD_CHECK: {
    SMALL_LETTER_CHECK: "A small (loswercase) letter",
    CAPITAL_LETTER_CHECK: "A capital (uppercase) letter",
    NUMBERS_CHECK: "A number",
    CHARCHTERS_CHECK: "A symbol",
  },
  USER_NAME_CHECK: "All small (lowercase) letters and starts with a character",
};

const VALIDATION_TITLE = {
  EMAIL_ADDRESS_CHECK: "Email must be in the correct format",
  PASSWORD_CHECK: "Password must contain the following:",
  USER_NAME_CHECK: "Username must contain the following:",
};

export { VALIDATION_CONTENT, VALIDATION_TITLE };
