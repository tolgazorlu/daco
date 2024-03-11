import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

/**
 * @desc PROBLEM MODEL
 */

@modelOptions({ schemaOptions: { timestamps: true } })
export class Problem {
    public _id?: string;

    @prop({ required: true })
    public day!: number;

    @prop({ required: true })
    public level!: string;

    @prop({ required: true, unique: true })
    public slug!: string;

    @prop({ required: true })
    public title!: string;

    @prop({ required: true })
    public description!: string;

    @prop({ required: true })
    public answer!: string;
}

export const ProblemModel = getModelForClass(Problem);
