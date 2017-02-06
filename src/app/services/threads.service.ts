import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AllUserData } from '../../../shared/to/all-user-data';
import {Http, Headers, Response} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ThreadsService {

  constructor(private _http: Http) { }

  loadUserThreads(): Observable<AllUserData> {
    return this._http.get('/api/threads')
      .map(res => res.json());
  }

}
