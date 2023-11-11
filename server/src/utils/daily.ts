const schedule = require('node-schedule');

let daily = 1;

const Job = schedule.scheduleJob('0 0 * * *', function(){
    daily++
});

export {Job, daily};