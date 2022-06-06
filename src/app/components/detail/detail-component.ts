import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostState } from './store/state/post-state';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-component.html',
  styleUrls: ['./detail-component.css']
})
export class DetailPageComponent implements OnInit {
  post:Observable<Post[]> ;
  constructor(private store:Store<PostState>) {
    this.post = this.store.select('post');
  }

  ngOnInit(): void {
  }

}
