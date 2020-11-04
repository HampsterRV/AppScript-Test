/*
const getGmailAliasList = () => {
    const aliases = GmailApp.getAliases();
    aliases.push(Session.getActiveUser().getEmail());
    return aliases;
}
*/
// spread syntax (supposedly shorter and cleaner code, debatable)
// ES6 Spreader something or other
const getGmailAliasList = () => {
  return [Session.getActiveUser().getEmail(), ...GmailApp.getAliases()];
};

export default getGmailAliasList;
