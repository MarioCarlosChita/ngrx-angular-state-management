import { ActionReducerMap } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { PostState } from "../state/post-state";
import { postReducer } from "./post-reducer";


export const reducers: ActionReducerMap<PostState> = {
  posts: postReducer
}
