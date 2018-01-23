/*

  Gekko is a Bitcoin trading bot for popular Bitcoin exchanges written 
  in node, it features multiple trading methods using technical analysis.

  If you are interested in how Gekko works, read more about Gekko's 
  architecture here:

  https://gekko.wizbit/docs/internals/architecture.html

  Disclaimer:

  USE AT YOUR OWN RISK!

  The author of this project is NOT responsible for any damage or loss caused 
  by this software. There can be bugs and the bot may not perform as expected 
  or specified. Please consider testing it first with paper trading and/or 
  backtesting on historical data. Also look at the code to see what how 
  it is working.

*/

console.log(`

/$$$$$$  /$$$$$$ /$$$$$$$ /$$   /$$/$$   /$$ /$$$$$$ /$$      /$$$$$$ /$$$$$$ 
/$$__  $$/$$__  $| $$__  $| $$$ | $| $$  | $$/$$__  $| $$     |_  $$_//$$__  $$
| $$  \__| $$  \ $| $$  \ $| $$$$| $| $$  | $| $$  \ $| $$       | $$ | $$  \ $$
| $$     | $$  | $| $$$$$$$| $$ $$ $| $$$$$$$| $$  | $| $$       | $$ | $$  | $$
| $$     | $$  | $| $$__  $| $$  $$$| $$__  $| $$  | $| $$       | $$ | $$  | $$
| $$    $| $$  | $| $$  \ $| $$\  $$| $$  | $| $$  | $| $$       | $$ | $$  | $$
|  $$$$$$|  $$$$$$| $$  | $| $$ \  $| $$  | $|  $$$$$$| $$$$$$$$/$$$$$|  $$$$$$/
\______/ \______/|__/  |__|__/  \__|__/  |__/\______/|________|______/\______/ 
`);

const util = require(__dirname + '/core/util');

console.log('\tGekko v' + util.getVersion());
console.log('\t"I need teepee for my BUNGHOLE!"');

const dirs = util.dirs();

if(util.launchUI())
  return require(util.dirs().web + 'server');

const pipeline = require(dirs.core + 'pipeline');
const config = util.getConfig();
const mode = util.gekkoMode();

if(
  config.trader.enabled &&
  !config['I understand that Gekko only automates MY OWN trading strategies']
)
  util.die('Do you understand what Gekko will do with your money? Read this first:\n\nhttps://github.com/askmike/gekko/issues/201');

// > Ever wonder why fund managers can't beat the S&P 500?
// > 'Cause they're sheep, and sheep get slaughtered.
pipeline({
  config: config,
  mode: mode
});

