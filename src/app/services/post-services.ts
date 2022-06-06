import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "../models/post";




@Injectable({
   providedIn:"root"
})


export class PostService {

   constructor(private http:HttpClient){}


   public listar():Observable<Post []>{
     return  this.http.get<Post []>(environment.URL + "/posts");
   }
}
