import { Component } from '@angular/core';
import { PrimengCommonImportsModule } from '../../../../shared/primeng-common-imports/primeng-common-imports.module';

@Component({
  selector: 'app-home',
  imports: [ PrimengCommonImportsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
