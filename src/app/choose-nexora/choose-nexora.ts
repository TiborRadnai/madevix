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
    { icon: '💸', title: 'Kedvező árak', description: 'Német webfejlesztői árak töredékéért kínálunk modern weboldalakat.' },
    { icon: '📧', title: 'Kapcsolatmentes rendelés', description: 'Weboldal megrendelése egyszerűen: űrlapon vagy e-mailben, bárhonnan.' },
    { icon: '⚙️', title: 'Modern technológia', description: 'Angular 20, Bootstrap, CSS – gyors, biztonságos és jövőálló megoldások.' },
    { icon: '🎨', title: 'Kreatív szolgáltatások', description: 'Fotózás, videószerkesztés, dizájn – minden egy kézben, egy stílusban.' },
    { icon: '📊', title: 'Analitika alapból', description: 'Google Analytics integrációval segítünk mérni a sikert.' },
    { icon: '🤖', title: 'AI-alapú tervezés', description: 'A Nexora jövőjét mesterséges intelligenciával építjük – veled együtt.' }
  ];
}
