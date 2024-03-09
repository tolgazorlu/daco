import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

/**
 * @desc FAQ MODEL
 */

@modelOptions({ schemaOptions: { timestamps: true } })
export class FAQ {
    public _id?: string;

    @prop({ required: true })
    public title!: string;

    @prop({ required: true })
    public description!: string;
}

export const FAQModel = getModelForClass(FAQ);
