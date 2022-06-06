import { Action } from "@ngrx/store";
import { Post } from "src/app/models/post";


export   enum IPostAction{
    ADD= "[post] add",
    REMOVE = "[post] remove"
}


export  class ADDPOST  implements Action{
    readonly type =IPostAction.ADD
    constructor(public payload:Post){}
}


export class REMOVEPOST  implements  Action{
  readonly type =IPostAction.REMOVE
  constructor(public payload:number){}
}


export type PostAction =  ADDPOST | REMOVEPOST;
