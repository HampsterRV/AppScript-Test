const sendEmail = (data) => {
  // make use of object destructuring to grab all the variables
  const { from, to, subject, body } = data;
  try {
    GmailApp.sendEmail(to, subject, body, {
      from,
    });
  } catch (f) {
    try {
      // fall back trying to use the regular mail script (not gmail specific)
      MailApp.sendEmail(to, subject, body, {
        from,
      });
    } catch (e) {
      return `Error: ${e.toString()}`;
    }
  }
  // string concat - templated strings to concatenate strings which is a feature of ES6 - which apparently my version didn't like
  // https://eslint.org/docs/rules/no-template-curly-in-string - remember to use the backtick character(`) not single or double quotes
  return `Email sent to ${to}`;
};

export default sendEmail;
