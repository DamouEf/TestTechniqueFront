import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Control } from '@app/shared/models/control.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  public controlUrl = '/api/v1/controls/?chambre=1';

  constructor(private httpClient: HttpClient) { }

  getControl(): Observable<Control[]> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset = utf-8', 'Pagination-Style': 'PageNumberPagination' });
    return this.httpClient.request<Control[]>('GET', this.controlUrl, {headers});
  }
}
