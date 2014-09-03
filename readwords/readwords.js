var censor = require("censorify_fdr");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day. Some very sad, bad and mad text."));
