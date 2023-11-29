const schedule = require("node-schedule");

let day = 1;
const date = new Date();
const monthDate = date.toLocaleString("default", { month: "long" });
const dayDate = date.toLocaleString("default", { day: "numeric" });
const yearDate = date.toLocaleString("default", { year: "numeric" });
let todaysDate = `${monthDate}, ${dayDate}, ${yearDate}`;

const Job = schedule.scheduleJob("0 0 * * *", function () {
  day++;
  const date = new Date();
  const monthDate = date.toLocaleString("default", { month: "long" });
  const dayDate = date.toLocaleString("default", { day: "numeric" });
  const yearDate = date.toLocaleString("default", { year: "numeric" });
  todaysDate = `${monthDate}, ${dayDate}, ${yearDate}`;
});

export { Job, day, todaysDate };
