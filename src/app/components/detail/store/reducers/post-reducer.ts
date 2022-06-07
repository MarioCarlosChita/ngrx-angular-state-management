import { Post } from "src/app/models/post";
import { IPostAction, PostAction } from "../action/post-action";
import { POSTS } from "../state/post-state";


export function postReducer(state: Post[] = POSTS, action: PostAction): Post[] {
  switch (action.type) {

    case IPostAction.addPost:
      return [...state, action.payload];

    case IPostAction.loadPosts:
      return action.posts;

    case IPostAction.loadingPosts:
      return state;

    default:
      return state;

  }
}

