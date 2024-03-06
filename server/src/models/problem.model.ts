import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class Problem {
  public _id?: string;

  @prop({ required: true })
  public day!: number;

  @prop({ required: true })
  public level!: string;

  @prop({ required: false, unique: true })
  public slug!: string;

  @prop({ required: true })
  public title!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public answer!: string;
}

export const ProblemModel = getModelForClass(Problem);
