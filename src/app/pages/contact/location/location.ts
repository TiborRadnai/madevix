import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-location',
  imports: [CommonModule, TranslateModule],
  standalone: true,
  templateUrl: './location.html',
  styleUrl: './location.css'
})
export class Location {

}
