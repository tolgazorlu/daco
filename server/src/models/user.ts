import { modelOptions, prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { Problem } from './problem'

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
    public _id?: string

    @prop({ required: true, unique: true, lowercase: true, minlength: 3, maxlength: 15 })
    public username!: string

    @prop({ required: true, unique: true })
    public email!: string

    @prop({ required: true })
    public password!: string

    @prop({ required: false, default: 'https://imageupload.io/ib/3oXStgvAko9IBAp_1693943124.png' })
    public avatar!: string

    @prop({ ref: Problem })
    public solvedProblems?: Ref<Problem>[]

    @prop({ required: true, default: false })
    public emailVerified!: boolean

    @prop()
    public verificationToken!: string

    @prop({ required: true, default: false })
    public isAdmin!: boolean

}

export const UserModel = getModelForClass(User)