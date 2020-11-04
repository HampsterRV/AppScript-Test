const onOpen = () => {
  // www.copypastecharacter.com
  SpreadsheetApp.getUi()
    .createMenu('➫ MailMan') // special characters are allowed if you want to
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

// export default onOpen;
module.exports = onOpen;
