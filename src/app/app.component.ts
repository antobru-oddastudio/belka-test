import { Component } from '@angular/core';
import { OfferCardComponent, OfferData } from "belka-test-components";
import { CircleCheck, ChevronRight, PhoneIncoming } from "lucide-angular";

export const DEFAULT_OFFER_DATA: OfferData = {
  benefits: [
    { id: 'a', label: 'Potrai usufruire GRATIS del servizio EDISONRisolve', icon: CircleCheck },
    { id: 'b', label: 'Energia 100% green', icon: CircleCheck },
    { id: 'c', label: 'Programma fedeltà "Spendi&Riprendi" con bonus', icon: CircleCheck },
  ],
  infoList: [
    {
      label: 'Tipo tariffa',
      value: 'Monoraria'
    },
    {
      label: 'Prezzo Luce',
      value: 'PUN + 0,169 €/kWh'
    },
    {
      label: 'Prezzo Gas',
      value: 'PSV + 0,593 €/Smc'
    },
    {
      label: 'Quota fissa (inclusa)',
      value: 'Luce 6,60€/mese, Gas 6,60€/mese'
    },
    {
      label: 'Prezzo Gas',
      value: 'Variabile'
    }
  ],
  logo: 'assets/teletu.png',
  title: 'Edison Dynamic Luce e Gas',
  rightHeader: {
    header: {
      title: 'Dual, Luce + Gas',
      icon: 'assets/icons/luce-gas.svg'
    },
    total: {
      label: 'Totale',
      subValue: '670,00 l\'anno',
      value: '52,27 €'
    },
    buttons: [
      {
        label: 'Scopri l\'offerta',
        id: 'show-offer',
        expand: 'full',
        color: 'primary',
        size: 'xl',
        iconOptions: {
          size: '20',
          icon: ChevronRight
        }
      },
      {
        label: 'Ti chiamiamo gratis',
        id: 'free-call',
        expand: 'full',
        color: 'secondary',
        size: 'xl',
        iconOptions: {
          size: '20',
          icon: PhoneIncoming
        }
      }
    ],
    details: [
      {
        label: 'Luce',
        value: '25,27 €',
        unit: 'al mese'
      },
      {
        label: 'Gas',
        value: '32,14 €',
        unit: 'al mese'
      }
    ],
  }
};

@Component({
  selector: 'app-root',
  imports: [OfferCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'belka-test';
  offer: OfferData = DEFAULT_OFFER_DATA;
}
