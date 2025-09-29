import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.html',
  styleUrls: ['./process.css']
})
export class Process {
steps = [
  {
    icon: 'fa-solid fa-lightbulb',
    title: '1. Elképzelés és inspiráció',
    description: 'Írj nekünk, és oszd meg, milyen weboldalt szeretnél. Mondd el, milyen stílus, színvilág, funkciók és struktúra lenne ideális számodra (egyoldalas vagy több aloldalas, levelezés, időpontfoglalás, hírlevél stb.). Ha van konkrét példa, amit kedvelsz, küldd el bátran – vagy böngéssz az inspirációs gyűjteményünkben. Add meg, milyen domainre gondoltál, és mi ellenőrizzük, hogy szabad-e. Ha nem, segítünk alternatívát találni.'
  },
  {
    icon: 'fa-solid fa-object-group',
    title: '2. Tervezet és ajánlat',
    description: 'Az elképzeléseid alapján készítünk egy vizuális skiccet, ami megmutatja az oldal nagyvonalú felépítését. Ezzel együtt kapsz egy átlátható árajánlatot és időkeretet. Fontos: az elkészülési idő a későbbi módosítások függvényében változhat.'
  },
  {
    icon: 'fa-solid fa-file-signature',
    title: '3. Szerződés és tartalom',
    description: 'Ha minden rendben, küldjük a szerződést. A munka csak akkor kezdődik el, ha az aláírt szerződés és minden szükséges tartalom (szövegek, képek, funkciók, igények) megérkezett hozzánk. Ez nem csak technikai feltétel — ez a gördülékeny együttműködés alapja. Ha a munka a megrendelő hibájából nem haladhat, az szerződésszegésnek minősül (ez a szerződésben is szerepel).'
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: '4. Fejlesztés és visszajelzés',
    description: 'Lépésről lépésre építjük fel az oldalt. Közben rendszeresen küldünk képes dokumentációt, hogy lásd, hol tartunk, és minden úgy alakuljon, ahogy elképzelted. A visszajelzéseid alapján finomítunk, pontosítunk.'
  },
  {
    icon: 'fa-solid fa-vial-circle-check',
    title: '5. Tesztelés és átadás előkészítése',
    description: 'Ha elkészült, indul az egyhetes tesztidőszak. Ekkor már működik a domain, beállítjuk a Google Analitikát, biztonsági funkciókat, és minden technikai részletet finomhangolunk.'
  },
  {
    icon: 'fa-solid fa-globe',
    title: '6. Fizetés és végleges átadás',
    description: 'Ha minden rendben, jön a fizetés. Fontos: amíg a végösszeg nem érkezik meg, a weboldalhoz nem biztosítunk hozzáférést. Ha a fizetés a szerződésben meghatározott időn belül nem történik meg, az szerződésszegésnek minősül. A fizetés után átadjuk a teljes weboldalt, és ha igényelted, folytatjuk a karbantartást is.'
  }
];
}
