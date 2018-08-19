import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';

export function apiServiceCreator(http: HttpClient) {
  return new ApiService(http);
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(readonly http: HttpClient) {}
}
