import {
    modelOptions,
    prop,
    getModelForClass,
    Ref,
    Severity,
} from "@typegoose/typegoose";
import { Problem } from "./problem.model";
import mongoose from "mongoose";

/**
 * @desc USER MODEL
 */

class solvedProblems {
    @prop({ ref: Problem })
    public problemId?: Ref<Problem>;

    @prop({ required: true })
    public date!: string;
}

@modelOptions({
    schemaOptions: { timestamps: true },
    options: { allowMixed: Severity.ALLOW },
})
export class User {
    public _id?: string;

    @prop({
        required: true,
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 15,
    })
    public username!: string;

    @prop({ required: true, unique: true })
    public email!: string;

    @prop({ required: true })
    public password!: string;

    @prop({
        required: false,
        default: "https://imageupload.io/ib/3oXStgvAko9IBAp_1693943124.png",
    })
    public avatar!: string;

    @prop({ type: mongoose.Schema.Types.Array })
    public solvedProblems!: solvedProblems[];

    @prop({ required: false, default: 1 })
    public currentDay?: number;

    @prop({ required: true, default: false })
    public emailVerified!: boolean;

    @prop()
    public verificationToken!: string;

    @prop({ required: true, default: false })
    public isAdmin!: boolean;

    @prop()
    resetPasswordToken?: String;

    @prop()
    resetPasswordExpires?: Date;

    @prop()
    public createdAt!: Date;
}

export const UserModel = getModelForClass(User);
