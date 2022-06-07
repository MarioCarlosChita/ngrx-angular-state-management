import { Post } from "src/app/models/post";
import { IPostAction, PostAction } from "../action/post-action";
import { POSTS } from "../state/post-state";


export function postReducer(state: Post[] =POSTS, action: PostAction): Post[] {
  switch (action.type) {
  case IPostAction.ADD:
    return [...state,action.payload];
  default:
     return state;
  }
}

