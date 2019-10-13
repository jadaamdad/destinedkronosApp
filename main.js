// Create native application menus and context menus.
//
// For more info, see:
// https://electronjs.org/docs/api/menu

const { app, BrowserWindow, Menu } = require('electron')
require('update-electron-app')({
  repo: 'jadaamdad/destinedkronosApp',
  updateInterval: '1 hour',
  logger: require('electron-log')
})
let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({ height: 600, width: 600,frame: false, resizable: false})
  mainWindow.loadFile('index.html')

  Menu.setApplicationMenu(null)
})
