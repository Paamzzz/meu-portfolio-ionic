import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { star, logoGithub, logoLinkedin } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonIcon]
})
export class SobrePage implements OnInit {

  constructor() {
     addIcons({ star, logoGithub, logoLinkedin })
   }

  ngOnInit() {
  }
}

//* Para estudos:
// import { addIcons } from 'ionicons' → traz a função que popula o dicionário
// import { starFilled } from 'ionicons/icons' → traz o SVG do ícone
// IonIcon no imports do @Component → diz pro Angular que você vai usar o componente <ion-icon> no HTML
// addIcons({ starFilled }) no constructor → registra o ícone no dicionário interno do Ionicons para o IonIcon conseguir encontrá-lo quando o HTML pedir
