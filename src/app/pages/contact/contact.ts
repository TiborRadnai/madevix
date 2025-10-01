import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { ContactForm } from './form/form';
import { Direct } from './direct/direct';
import { Location } from './location/location';
import { Closing } from './closing/closing';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, Header, ContactForm, Direct, Location, Closing],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
