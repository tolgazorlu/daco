import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class Contact {
    public _id?: string;

    @prop({ required: true })
    public email!: string;

    @prop({ required: true })
    public subject!: string;

    @prop({ required: true })
    public message!: string;
}

export const ContactModel = getModelForClass(Contact);
