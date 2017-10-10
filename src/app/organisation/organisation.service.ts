

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Organisation } from './organisation';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class OrganisationService {

  private entity_url = environment.REST_API_URL + 'organisations';

  constructor(private _http: Http) {
  }

  getOrganisations(): Observable<Organisation[]> {
    return this._http.get(this.entity_url)
      .map((response: Response) => <Organisation[]> response.json())
      .catch(this.handleError);
  }

  getOrganisationById(organisation_id: string): Observable<Organisation> {
    return this._http.get((this.entity_url + '/' + organisation_id))
      .map((response: Response) => <Organisation> response.json())
      .catch(this.handleError);
  }

  addOrganisation(organisation: Organisation): Observable<Organisation> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this._http.post(this.entity_url, JSON.stringify(organisation), {headers})
      .map((response: Response) => <Organisation> response.json())
      .catch(this.handleError);
  }

  updateOrganisation(organisation_id: string, organisation: Organisation): Observable<Organisation> {
    const body = JSON.stringify(organisation);
    const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
    const options = new RequestOptions({headers: headers});
    return this._http.put((this.entity_url + '/' + organisation_id), body, options)
      .map((response: Response) => response)
      .catch(this.handleError); // TODO parse response header when error ?
  }

  deleteOrganisation(organisation_id: string): Observable<Organisation> {
    return this._http.delete((this.entity_url + '/' + organisation_id))
      .map((response: Response) => <Organisation> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
