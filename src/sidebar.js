// this gets auto inserted when I typed the function (argument for using import vs require)
import getGmailAliasList from './alias';

const showSidebar = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasList();
  const html = template.evaluate().setTitle('MailMan');
  SpreadsheetApp.getUi().showSidebar(html);
};

export default showSidebar;
