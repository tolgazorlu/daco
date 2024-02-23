const schedule = require("node-schedule");

let day: number = 1;
const date: Date = new Date();
const monthDate: string = date.toLocaleString("default", { month: "long" });
const dayDate: string = date.toLocaleString("default", { day: "numeric" });
const yearDate: string = date.toLocaleString("default", { year: "numeric" });
let todaysDate: string = `${monthDate}, ${dayDate}, ${yearDate}`;

const Job = schedule.scheduleJob("0 0 * * *", function () {
  day++;
  const date: Date = new Date();
  const monthDate: string = date.toLocaleString("default", { month: "long" });
  const dayDate: string = date.toLocaleString("default", { day: "numeric" });
  const yearDate: string = date.toLocaleString("default", { year: "numeric" });
  todaysDate = `${monthDate}, ${dayDate}, ${yearDate}`;
});

export { Job, day, todaysDate };
