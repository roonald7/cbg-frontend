// src/app/services/member.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:5238/api/Pessoa';

  constructor(private http: HttpClient) {}

  createMember(member: Member): Observable<any> {
    return this.http.post(this.apiUrl, member);
  }

  // Opcional: método para listar membros
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }
}
