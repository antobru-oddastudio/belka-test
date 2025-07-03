# belka-test-components

Libreria di componenti Angular riutilizzabili per progetti frontend.

## Componenti inclusi

- **AlertComponent**: Mostra messaggi di avviso, successo, errore o informazione.
- **BadgeComponent**: Badge visuale per etichette o status, con colore e testo personalizzato.
- **ButtonComponent**: Pulsante personalizzabile con supporto per colore, dimensione, espansione, icona e gestione eventi click.
- **CardComponent**: Contenitore per visualizzare contenuti all'interno di una card stilizzata.
- **OfferCardComponent**: Card riassuntiva di un'offerta, con logo, titolo, benefit, dettagli, totale e pulsanti azione.

## Installazione e build

Per compilare la libreria:

```bash
ng build belka-test-components
```

Gli artefatti saranno disponibili in `dist/belka-test-components`.

### Pubblicazione

Per pubblicare la libreria su npm:

```bash
cd dist/belka-test-components
npm publish
```

## Test

Per eseguire i test unitari:

```bash
ng test belka-test-components
```

## Dipendenze principali

- Angular ^19.2.0
- tslib ^2.3.0

## Utilizzo

Importa i componenti desiderati nel tuo modulo Angular e usali nei template tramite i rispettivi selector (es: `<belka-test-alert>`, `<belka-test-badge>`, ecc).
