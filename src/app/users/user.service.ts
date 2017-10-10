
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
  private _getUrl = "/api/users";
  private _postUrl = "/api/user";
  private _putUrl = "/api/user";
  private _deleteUrl = "/api/user";
 // private entity_url = environment.REST_API_URL + 'users';

  constructor(private _http: Http) {
  }

  getUsers(): Observable<User[]> {
  console.log("in user service");
    return this._http.get(this._getUrl)
      .map((response: Response) => <User[]> response.json())
      .catch(this.handleError);
  }

  getUserById(user_id: string): Observable<User> {
    return this._http.get((this._getUrl + '/' + user_id))
      .map((response: Response) => <User> response.json())
      .catch(this.handleError);
  }



  addUser(user: User): Observable<User> {
    console.log("in addUser service");
     console.log(User);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');
   //Access-Control-Allow-Methods: POST, GET, OPTIONS
    headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT, DELETE');
    return this._http.post(this._postUrl, JSON.stringify(user), {headers})
      .map((response: Response) => <User> response.json())
      .catch(this.handleError);

  }

  updateUser(user_id: any, user: User): Observable<User> {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
     headers.append('Access-Control-Allow-Origin','*');
   //Access-Control-Allow-Methods: POST, GET, OPTIONS
    headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT, DELETE');
    const options = new RequestOptions({headers: headers});
    return this._http.put((this._putUrl + '/' + user_id), body, options)
      .map((response: Response) => response)
      .catch(this.handleError); // TODO parse response header when error ?
  }

  deleteUser(user_id: string): Observable<User> {
    return this._http.delete((this._deleteUrl + '/' + user_id))
      .map((response: Response) => <User> response.json())
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





