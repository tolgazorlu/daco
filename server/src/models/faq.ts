import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class FAQ {
    public _id?: string;

    @prop({ required: true })
    public title!: string;

    @prop({ required: true })
    public description!: string;
}

export const FAQModel = getModelForClass(FAQ);
