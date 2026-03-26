import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { schoolOutline, peopleOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonImg, IonIcon],
})
export class HomePage {
  constructor() {
     addIcons({ schoolOutline, peopleOutline, locationOutline })
  }
}
