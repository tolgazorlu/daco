import { UserModel } from "../models/user.model";

const schedule = require("node-schedule");

/**
 * @desc INCREASE EVERY DAY FROM USER MODEL
 */

const Daily = schedule.scheduleJob("0 0 * * *", async () => {
    try {
        await UserModel.updateMany({}, { $inc: { currentDay: 1 } });
        console.log("Day count incremented for all users");
    } catch (error) {
        console.error("Error incrementing day count:", error);
    }
});

export { Daily };
