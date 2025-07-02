import { Component, input, output } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

/**
 * ButtonComponent
 *
 * Un pulsante personalizzabile con supporto per colore, dimensione, espansione, icona e gestione eventi click.
 */
@Component({
  selector: 'belka-test-button',
  imports: [LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * Identificatore univoco del bottone
   */
  public id = input<string>();
  /**
   * Testo/etichetta del bottone
   */
  public label = input<string>();
  /**
   * Espansione del bottone: 'full' per larghezza completa, 'auto' per larghezza automatica
   */
  public expand = input<"full" | 'auto' | undefined>('auto');
  /**
   * Dimensione del bottone: 'xl' o 'base'
   */
  public size = input<'xl' | 'base' | undefined>('xl');
  /**
   * Colore del bottone: 'primary' o 'secondary'
   */
  public color = input<'primary' | 'secondary'>();
  /**
   * Opzioni per l'icona del bottone
   */
  public iconOptions = input<{ icon: LucideIconData, size?: string, color?: string }>();
  /**
   * Evento emesso al click sul bottone
   */
  public click = output<MouseEvent>();
}
