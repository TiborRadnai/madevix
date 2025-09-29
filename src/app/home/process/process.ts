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
    icon: 'fa-solid fa-lightbulb',
    title: '1. Elképzelés és inspiráció',
    description: 'Megosztod velünk, milyen weboldalt szeretnél. Segítünk tisztázni a célokat, és akár egy ingyenes tervezetet is küldünk, hogy lásd, mire számíthatsz.'
  },
  {
    icon: 'fa-solid fa-object-group',
    title: '2. Tervezés és struktúra',
    description: 'Közösen kialakítjuk az oldal felépítését, funkcióit és vizuális stílusát. Ha szeretnéd, böngészhetsz inspirációs példák között is.'
  },
  {
    icon: 'fa-solid fa-file-signature',
    title: '3. Árajánlat és időkeret',
    description: 'A tervezet alapján kapsz egy átlátható ajánlatot. Meghatározzuk a projekt időtávját, és ha minden rendben, indulhat a munka.'
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: '4. Fejlesztés és visszajelzés',
    description: 'Lépésről lépésre építjük fel az oldalt. Közben folyamatosan egyeztetünk, hogy minden úgy alakuljon, ahogy elképzelted.'
  },
  {
    icon: 'fa-solid fa-vial-circle-check',
    title: '5. Tesztelés és átadás',
    description: 'Mielőtt átadjuk az oldalt, alaposan leteszteljük: sebesség, biztonság, megjelenés — minden a helyére kerül.'
  },
  {
    icon: 'fa-solid fa-globe',
    title: '6. Fizetés és domain',
    description: 'Ha minden rendben, jön a fizetés, és megkapod a kész weboldalt a saját domaineden.'
  }
];


}




