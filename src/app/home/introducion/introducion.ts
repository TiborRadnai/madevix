import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-introducion',
  imports: [CommonModule, TranslateModule],
  standalone: true,  
  templateUrl: './introducion.html',
  styleUrl: './introducion.css'
})
export class Introducion {

}
