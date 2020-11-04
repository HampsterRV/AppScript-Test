import getGmailAliasList from './alias';

const doGet = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasList();
  const html = template.evaluate().setTitle('MailMan'); // should be set as a resource variable
  return html;
};

export default doGet;
