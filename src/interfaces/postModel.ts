import { Document } from "mongoose";
import { IPost } from "./post";

export interface IPostModel extends IPost, Document {

}
