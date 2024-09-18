import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Post} from "../model/post.entity";

@Injectable({providedIn: 'root'})
export class PostService extends BaseService<Post>{
  constructor() {
    super();
    this.resourceEndpoint = 'post';
  }
}
