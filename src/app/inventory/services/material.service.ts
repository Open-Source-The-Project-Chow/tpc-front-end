import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Material} from "../model/material.entity";

@Injectable({
  providedIn: 'root'
})
export class MaterialService extends BaseService<Material>{

  constructor() {
    super();
    this.resourceEndpoint = '/materials';
  }
}
