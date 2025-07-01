import { Component, input, output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AlertComponent } from '../alert/alert.component';

type OfferData = {
  logo: string;
  title: string;
  benefits: { iconUrl?: string, label: string };
  infoList: { label: string, value: string };
  details: { label: string, value: string, unit?: string }[];
  total: { label: string, value: string, subValue: string };
  buttons: { id: string, options: BelkaTestButtonOptions }[]
}

@Component({
  selector: 'offer-card',
  standalone: true,
  imports: [CardComponent, AlertComponent],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
})
export class OfferCardComponent {

  public data = input<OfferData>();

  public buttonClick = output<string>();
}
