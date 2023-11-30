
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    const isValid = this.authService.login(this.email, this.senha);
    if (isValid) {
      
      this.router.navigate(['/area-logada'], { queryParams: { email: this.email } });
    } else {
      alert('Email e senha inválidos');
     
    }
  }
}
