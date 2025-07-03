import { Component, input } from '@angular/core';

/**
 * BadgeComponent
 *
 * Un badge visuale per etichette o status, con supporto per colore e testo personalizzato.
 */
@Component({
  selector: 'belka-test-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  /**
   * Testo visualizzato all'interno del badge
   */
  public label = input<string>();
  /**
   * Colore del badge: 'primary' o 'secondary'
   */
  public color?: 'primary' | 'secondary';
}
