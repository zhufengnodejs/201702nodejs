let CronJob = require('cron').CronJob;
/**
 * 秒 分 小时 日期 月 星期
 * * 代表所有可能出现的值
 * 固定值 精确匹配
 * 用逗号隔开的枚举值
 * 用杠表示区间，表示一个范围的值
 * 星/5 这个代表每隔5秒执行一次
 * 每周一和周五晚上10点执行关机命令
 *
 * Seconds: 0-59
 * Minutes: 0-59
 * Hours: 0-23
 * Day of Month: 1-31
 * Months: 0-11 0表示1月
 * Day of Week: 0-6  0表示周日
 */
let job = new CronJob("0 0 22 * * 1,5",function(){
    console.log(new Date().toLocaleString());
});
job.start();