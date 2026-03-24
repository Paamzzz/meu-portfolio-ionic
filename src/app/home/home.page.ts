import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonIcon} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonImg, IonIcon],
})
export class HomePage {
  constructor() {}
}
