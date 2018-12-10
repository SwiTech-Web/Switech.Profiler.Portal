import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080/profiler/project';

  constructor(private http: HttpClient) { }

  getProject(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
