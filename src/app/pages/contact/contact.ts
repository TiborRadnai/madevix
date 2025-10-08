import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/header/header';
import { ContactForm } from './form/form';
import { Direct } from './direct/direct';
import { Location } from './location/location';
import { Closing } from './closing/closing';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, TranslateModule, Header, ContactForm, Direct, Location, Closing],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
