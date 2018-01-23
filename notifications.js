const Pushover = require('node-pushover-client');
const util = require(__dirname + '/core/util');
const config = util.getConfig();
 
const client = new Pushover({
  token: config.pushover.key,
  user: config.pushover.user,
});
 
client
  .send({message: 'An error has occured and [instance name] has gone offline.'})
  .then((res)=>{
	console.log(res);
	process.exit(0);
  }
);
