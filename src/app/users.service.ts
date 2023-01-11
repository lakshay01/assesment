import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  deleteUser(user:any){
    return this.httpClient.delete('https://dummyjson.com/users/'+ user.id);
  }
  updateUser(user:any){
    return this.httpClient.put('https://dummyjson.com/users/'+ user.id,
    JSON.stringify({
      email: user.email,
      phone: user.phone
    }));
  }

  getUsersList(){
    return this.httpClient.get('https://dummyjson.com/users');
  }

  filterUsers(name:string):Observable<any>{
  return this.httpClient.get('https://dummyjson.com/users/search?q=' + name);
  }
}
