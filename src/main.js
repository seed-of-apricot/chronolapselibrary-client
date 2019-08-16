/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow } = require('electron');

let window;
const main = () => {
  window = new BrowserWindow({ width: 800, height: 600 });
  window.loadURL('https://localhost:3000');
  window.webContents.openDevTools();
};

app.commandLine.appendSwitch('ignore-certificate-errors', 'true');

app.on('ready', main);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (window === null) {
    main();
  }
});
