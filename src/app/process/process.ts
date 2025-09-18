import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html',
  styleUrl: './process.css'
})
export class Process {
steps = [
  {
    icon: 'fa-solid fa-brain',
    title: 'Stratégiai tervezés',
    description: 'Üzleti célok, időtáv, erőforrások — közösen átgondoljuk, mit szeretnél elérni.'
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Webdesign és szerkezet',
    description: 'Megtervezzük a honlap felépítését, funkcióit és vizuális stílusát.'
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Fejlesztés és projektmenedzsment',
    description: 'A tervekből működő honlapot készítünk, checklist alapján, hibamentesen.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Tesztelés és átadás',
    description: 'Sebesség, biztonság, megjelenés — mindent letesztelünk, mielőtt átadjuk.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Mérés és optimalizálás',
    description: 'Adataid alapján finomhangoljuk a konverziókat, UX-et és teljesítményt.'
  },
  {
    icon: 'fa-solid fa-tools',
    title: 'Rendszerfelügyelet',
    description: 'Ha kéred, 0–24-ben figyeljük és karbantartjuk a weboldalad.'
  }
];

}




