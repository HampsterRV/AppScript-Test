// import onOpen from './onOpen';
const onOpen = require('./onOpen');
// auto added
const { default: sendEmail } = require('./send');
// this was auto added
const { default: showSidebar } = require('./sidebar');
const { default: doGet } = require('./webapp');

function myFunction() {
  Logger.log('Hello world from VS Code!');
}

// this is needed for webpack to do what it needs to do to make myFunction publically acessible
global.myFunction = myFunction;
global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.sendEmail = sendEmail;
global.doGet = doGet;
