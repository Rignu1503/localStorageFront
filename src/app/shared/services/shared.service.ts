import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchValueSubject = new BehaviorSubject<string>(''); // Inicializa con un valor vacío
  searchValue$ = this.searchValueSubject.asObservable(); // Expone el valor como un Observable

  
  updateSearchValue(value: string) {
    this.searchValueSubject.next(value);
  }
}
