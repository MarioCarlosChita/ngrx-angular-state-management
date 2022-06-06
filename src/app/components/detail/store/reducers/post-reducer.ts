import { Post } from "src/app/models/post";
import { IPostAction, PostAction } from "../action/post-action";


export function postReducer(state: Post[] = [], action: PostAction) {
  switch (action.type) {
    case IPostAction.ADD:
      return [...state,action.payload];
   default:
     return state;
  }
}

