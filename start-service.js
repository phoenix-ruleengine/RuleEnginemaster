#!/usr/bin/env node
var app = require('./app');

//Set port
app.set('port', process.env.PORT || 3004);

//Start service
var service = app.listen(app.get('port'), function () {
  console.log('\n phoenix-rules-engine service started on port ' + service.address().port);
});