var program = require("commander");
var colors = require("colors");

program
    .version("0.0.1")
    .option("-i, --info", "Add more info");

program.on("--help", function(){
    console.log("\n   Examples:\n");
    console.log("      $ events -h");
    console.log("      $ events tick\n");
    console.log("Events is a program to show the viewer how cli programs and events work in node");
});

program.on("error", function(err, command){
    console.log(colors.red("   Error: ", err.message));
    command.outputUsage();
    command.outputCommands();
    command.outputOptions();
    console.log();
    process.exit(1);
});

program
    .command("fire [msg]")
    .description("this fires an event")
    .action(function(msg, options){
        process.emit("gunfire", msg);
    });

process.on("gunfire", function(msg){
    console.log("GUNFIRE : " + msg);
});



program.parse(process.argv);