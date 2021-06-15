const { app, BrowserWindow } = require ('electron')

  app.on('ready', () => {
      console.log('Aplicacao Iniciada')
      let mainWindows = new BrowserWindow({
        width: 800,
        height:600
      })

      mainWindows.loadURL(`file://${__dirname}/app/index.html`)
  })

  app.on('window-all-closed', ()=>{
    app.quit()
  })