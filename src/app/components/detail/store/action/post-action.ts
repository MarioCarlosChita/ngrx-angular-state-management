import { Action } from "@ngrx/store";
import { Post } from "src/app/models/post";


export enum IPostAction {
  addPost = "[post] add",
  removePosts = "[post] remove",
  loadPosts = "[post] loads posts",
  loadingPosts = "[post] loading posts from api"
}


export class AddPosts implements Action {
  readonly type = IPostAction.addPost
  constructor(public payload: Post) { }
}


export class RemovePosts implements Action {
  readonly type = IPostAction.removePosts
  constructor(public payload: number) { }
}

export class loadingPosts implements Action {
  readonly type = IPostAction.loadingPosts;
  constructor() { }
}

export class loadPosts implements Action {
  readonly type = IPostAction.loadPosts
  constructor(public posts: Post[]) { }
}


export type PostAction = AddPosts | RemovePosts | loadPosts | loadingPosts;
