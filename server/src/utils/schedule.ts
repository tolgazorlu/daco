import { UserModel } from "../models/user.model";

const schedule = require("node-schedule");

// let day: number = 1;
// const date: Date = new Date();
// const monthDate: string = date.toLocaleString("default", { month: "long" });
// const dayDate: string = date.toLocaleString("default", { day: "numeric" });
// const yearDate: string = date.toLocaleString("default", { year: "numeric" });
// let todaysDate: string = `${monthDate}, ${dayDate}, ${yearDate}`;

// const Job = schedule.scheduleJob("0 0 * * *", function () {
//   day++;
//   const date: Date = new Date();
//   const monthDate: string = date.toLocaleString("default", { month: "long" });
//   const dayDate: string = date.toLocaleString("default", { day: "numeric" });
//   const yearDate: string = date.toLocaleString("default", { year: "numeric" });
//   todaysDate = `${monthDate}, ${dayDate}, ${yearDate}`;
// });

// export { Job, day, todaysDate };

const Daily = schedule.scheduleJob('0 0 * * *', async () => {
  try {
      await UserModel.updateMany({}, { $inc: { currentDay: 1 } });
      console.log('Day count incremented for all users');
  } catch (error) {
      console.error('Error incrementing day count:', error);
  }
});

export { Daily }