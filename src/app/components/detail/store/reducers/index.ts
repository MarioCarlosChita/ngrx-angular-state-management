import { ActionReducerMap } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { postReducer } from "./post-reducer";


export interface AppState {
  posts: Post[]
}


export const reducers: ActionReducerMap<AppState> = {
  posts: postReducer
}
