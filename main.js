// Create native application menus and context menus.
//
// For more info, see:
// https://electronjs.org/docs/api/menu

const { app, BrowserWindow, Menu } = require('electron')

let mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({ height: 600, width: 600 })
  mainWindow.loadFile('index.html')

  Menu.setApplicationMenu(null)
})
