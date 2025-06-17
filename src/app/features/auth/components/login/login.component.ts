import { Component } from '@angular/core';
import { PrimengCommonImportsModule } from '../../../../shared/primeng-common-imports/primeng-common-imports.module';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'app-login',
  imports: [PrimengCommonImportsModule, IftaLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Handle login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  backToHome() {
    // Logic to navigate back to home
    console.log('Navigating back to home');
  }
}
