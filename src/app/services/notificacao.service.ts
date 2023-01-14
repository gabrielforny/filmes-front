import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NotificacaoService {

  constructor( private toastr: ToastrService ) { }

  toastrSuccess(message: string) {
    this.toastr.success(message);
  }

  toastrError(message: string) {
    this.toastr.error(message);
  }
}
