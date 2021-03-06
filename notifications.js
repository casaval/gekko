const Push = require( 'pushover-notifications' )
const config = require( __dirname + '/config.js');
const token = config.pushover.key;
const user = config.pushover.user;
const tag = config.pushover.tag;
 
var p = new Push( {
  user: user,
  token: token,
});
 
var msg = {
  // These values correspond to the parameters detailed on https://pushover.net/api
  // 'message' is required. All other values are optional.
  message: 'Bot has gone offline. Reason: ',	// required
  title: tag+"Warning / Error",
  sound: 'magic',
  device: 'AWS Trader Bot',
  priority: 1
}
 
// p.send( msg, function( err, result ) {
//   if ( err ) {
//     throw err;
//   }
//   console.log( result );
//   process.exit(0);
// })

function ErrorNotification(message){
  p.send( msg+message, function(err, result){
    if(err){
      throw err;
    }
    console.log( result );
    return;
  })
}

module.exports = {
  error: ErrorNotification,
}

