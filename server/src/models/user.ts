import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({schemaOptions: {timestamps: true}})
export class User {
    public _id?: string

    @prop({required: true, unique: true})
    public username!: string

    @prop({required: true, unique: true})
    public email!: string

    @prop({required: true})
    public password!: string

    @prop({required: false,  default: 'https://imageupload.io/ib/3oXStgvAko9IBAp_1693943124.png'})
    public avatar!: string

    @prop({required: true, default: false})
    public isAdmin!: boolean

}

export const UserModel = getModelForClass(User)