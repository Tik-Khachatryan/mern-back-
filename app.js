const express  = require('express');const config   = require('config');const app      = express();const PORT     = config.get('port') || 3001;const mongoose = require('mongoose');const mongoURL = config.get('mongoURL');const auth     = require('./routes/auth.routes');const link     = require('./routes/link.routes');const redirect = require('./routes/redirect.routes');app.use(express.json({extended: true}));app.use('/api/auth', auth);app.use('/api/link', link);app.use('/t', redirect);async function server() {    try {        await mongoose.connect(mongoURL, {            useNewUrlParser:    true,            useUnifiedTopology: true,            useCreateIndex:     true        });        app.listen(PORT, () => console.log(`app in listening on port ${PORT}`));    } catch (e) {        console.log("server error", e.message);        process.exit(1);    }}server();