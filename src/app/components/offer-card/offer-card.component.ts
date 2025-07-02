import { Component, input, output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AlertComponent } from '../alert/alert.component';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule, LucideIconData, Plus } from 'lucide-angular';
/**
 * Tipo che rappresenta i dati visualizzati dalla OfferCard.
 */
export type OfferData = {
  /** URL del logo da mostrare nella card */
  logo: string;
  /** Titolo principale della card */
  title: string;
  /** Lista dei benefit, ognuno con id, icona opzionale e label */
  benefits: { id: string, icon?: LucideIconData, label: string }[];
  /** Lista di informazioni aggiuntive (label e valore) */
  infoList: { label: string, value: string }[];
  rightHeader: {
    header?: {
      title: string;
      icon?: LucideIconData | string;
    }
    /** Totale, con label, valore e subvalore */
    total: { label: string, value: string, subValue: string };
    /** Dettagli aggiuntivi (label, valore, unità opzionale) */
    details: { label: string, value: string, unit?: string }[];
    /** Pulsanti da mostrare nella card */
    buttons: {
      /** Identificatore del pulsante */
      id: string,
      /** Testo del pulsante */
      label: string,
      /** Espansione del pulsante */
      expand?: "full" | 'auto',
      /** Dimensione del pulsante */
      size?: 'xl' | 'base',
      /** Colore del pulsante */
      color?: 'primary' | 'secondary',
      /** Opzioni per l'icona del pulsante */
      iconOptions?: {
        icon: LucideIconData,
        size?: string,
        color?: string
      }
    }[]
  }
}

/**
 * OfferCardComponent
 *
 * Card riassuntiva di un'offerta, con logo, titolo, benefit, dettagli, totale e pulsanti azione.
 */
@Component({
  selector: 'belka-test-offer-card',
  imports: [CardComponent, AlertComponent, ButtonComponent, LucideAngularModule],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
  standalone: true
})
export class OfferCardComponent {
  /** Icona plus */
  public plusIcon: LucideIconData = Plus;

  /** Dati dell'offerta da visualizzare nella card */
  public data = input<OfferData>();

  /**
   * Evento emesso al click su un pulsante della card
   * Restituisce l'id del bottone.
   * */
  public buttonClick = output<string>();
}
