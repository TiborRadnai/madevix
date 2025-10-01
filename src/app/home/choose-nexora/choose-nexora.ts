import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-nexora',
  imports: [CommonModule],
  standalone: true,  
  templateUrl: './choose-nexora.html',
  styleUrl: './choose-nexora.css'
})
export class ChooseNexora {
cards = [
  { icon: 'fa-solid fa-scale-balanced', title: 'Rugalmas árképzés', description: 'Webfejlesztés egyedi igényekre szabva – átlátható árakkal, rejtett költségek nélkül.' },
  { icon: 'fa-solid fa-paper-plane', title: 'Egyszerű indulás', description: 'Weboldal megrendelése online – űrlapon vagy e-mailben, bárhonnan, bármikor.' },
  { icon: 'fa-solid fa-gears', title: 'Modern technológia', description: 'Angular, TypeScript, moduláris CSS – gyors, biztonságos és skálázható megoldások.' },
  { icon: 'fa-solid fa-palette', title: 'Professzionális megjelenés', description: 'Dizájn, képszerkesztés, videós tartalmak – egységes arculat, egy kézben.' },
  { icon: 'fa-solid fa-chart-line', title: 'Mérhető eredmények', description: 'Google Analytics integrációval segítünk nyomon követni, mi működik – és mi nem.' },
  { icon: 'fa-solid fa-robot', title: 'AI-támogatott tervezés', description: 'Mesterséges intelligenciával segítünk gyorsabban és okosabban dönteni – már az első lépésektől.' }
];
}
