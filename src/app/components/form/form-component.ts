import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { ADDPOST } from "../detail/store/action/post-action";
import { PostState } from "../detail/store/state/post-state";




@Component({
  selector: 'app-form',
  templateUrl: "./form-component.html",
  styleUrls: ["./form-component.css"]
})


export class FormPageComponent implements OnInit {


  constructor(private store: Store<PostState>) { }
  ngOnInit(): void { }


  public addPost(): void {
    const params: Post = {
      body: "novo",
      id: 2,
      title: "novo titulo",
      userId: 3
    };
    this.store.dispatch(new ADDPOST(params));
  }


}
