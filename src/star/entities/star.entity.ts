import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StarDocument = Star & Document;

@ObjectType()
export class Starer {
  @Field()
  title: string;

  @Field()
  @Prop(String)
  username: string;

  @Field()
  @Prop(String)
  avatar: string;
}

@ObjectType()
@Schema({
  timestamps: true,
})
export class Star {
  @Field()
  _id: string;

  @Field()
  @Prop(() => Starer)
  user: Starer

  @Field()
  @Prop(String)
  creationId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export const StarSchema = SchemaFactory.createForClass(Star);
