import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = GlobalConstants.url;

  constructor() { }
}
