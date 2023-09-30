import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private confirmSubject = new Subject<boolean>();

  constructor() {}

  confirm(message: string): Observable<boolean> {
    Swal.fire({
      title: '',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#fd723b',
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.confirmSubject.next(true);
      } else {
        this.confirmSubject.next(false);
      }
    });

    return this.confirmSubject.asObservable();
  }

  success(message: string): void {
    Swal.fire({
      title: 'Success',
      text: message,
      icon: 'success',
      confirmButtonColor: '#fd723b',
      confirmButtonText: 'OK'
    });
  }

  error(message: string): void {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonColor: '#fd723b',
      confirmButtonText: 'OK'
    });
  }

  info(message: string): void {
    Swal.fire({
      title: 'Info',
      text: message,
      icon: 'info',
      confirmButtonColor: '#fd723b',
      confirmButtonText: 'OK'
    });
  }
}
