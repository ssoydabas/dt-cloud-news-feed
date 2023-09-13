import type {
  Types as MongooseTypes,
  Document as MongooseDocument,
} from "mongoose";

export type SubDocument<T> = MongooseTypes.Subdocument<MongooseTypes.ObjectId> &
  T;

export type Document<T> = MongooseDocument<MongooseTypes.ObjectId> &
  T & {
    _id: MongooseTypes.ObjectId;
  };
