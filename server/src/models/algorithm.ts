import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'
import mongoose from 'mongoose'

class Example {
    @prop({required: true})
    public detail!: string
}

@modelOptions( {schemaOptions: {timestamps: true}})
export class Algorithm {
    public _id?: string

    @prop({required: true})
    public day!: number

    @prop({required: true})
    public date!: string

    @prop({required: true, unique: true})
    public sequence!: number

    @prop({required: true})
    public level!: string

    @prop({required: true, unique: true})
    public slug!: string

    @prop({required: true})
    public title!: string

    @prop({required: true})
    public description!: string

    @prop({type: mongoose.Schema.Types.String})
    public example!: Example[];

    @prop()
    public constrain!: string

    @prop({required: true})
    public answer!: string
}


export const AlgorithmModel = getModelForClass(Algorithm)