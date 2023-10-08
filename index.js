const schedule = require('node-schedule');
const { spawn } = require("child_process");
const { sendWebhook } = require("./utilities/webhook");

require('dotenv').config();

//collect rule times for cron job
let rule = `${process.env.RULE_SECOND} ${process.env.RULE_MINUTE} ${process.env.RULE_HOUR} ${process.env.RULE_DATE} ${process.env.RULE_MONTH} ${process.env.RULE_WEEK_DAY}`;

//start cron
const job = schedule.scheduleJob(rule, function(){

    //command to service restart wings
    let wings = spawn('service', ['wings', 'restart']);

    //if the command runs correctly
    wings.stdout.on('data', (data) => {
        sendWebhook(`${process.env.TITLE} Succesfully Ran`, process.env.DISCORD_URL, false);
    });

    //if the command returns errors
    wings.stderr.on('data', (data) => {
        sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
    });

    //if the command window fails to start
    wings.on('error', function(err){
        sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
    });

    wings.on('exit', (code) => {
         //if the command runs correctly
        if(code == 0){
            sendWebhook(`${process.env.TITLE} Succesfully Ran`, process.env.DISCORD_URL, false);
        }else{
            sendWebhook(`${process.env.TITLE} Failed To Run`, process.env.DISCORD_URL, true);
        }
    });

    //close window
    wings.stdin.end();

});

