import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'minimal-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './minimal-layout.html',
  styleUrls: ['./minimal-layout.css']
})
export class MinimalLayout {}
