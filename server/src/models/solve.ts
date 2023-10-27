import { modelOptions, prop, getModelForClass, Ref } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { User } from './user';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Solve {
    public _id?: string

    @prop({ ref: User })
    public user?: Ref<User>

    @prop({ required: true, default: [] })
    public example!: mongoose.Types.Array<string>;

}


export const SolveModel = getModelForClass(Solve)