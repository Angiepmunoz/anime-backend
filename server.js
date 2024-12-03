const app = require("./app")
require("dotenv").config() // configuration 

const PORT = process.env.PORT

app.listen(PORT, ()=>{ // listens for a request at a specific port
    console.log(`I'm listening at PORT ${PORT}`);
})

// your server must be running in order to make a request