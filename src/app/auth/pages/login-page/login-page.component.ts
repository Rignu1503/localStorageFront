import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
  standalone: false
})
export class LoginPageComponent {

  constructor(private router: Router) { }

  onSubmit(event: Event): void {
    event.preventDefault(); // Evita que el formulario se envíe
    console.log('Form submitted');
    this.router.navigate(['/admin']);
  }


}
