import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { OfferCardComponent, OfferData } from 'belka-test-components';
import { CircleCheck, ChevronRight, PhoneIncoming } from 'lucide-angular';

const meta: Meta<OfferCardComponent> = {
  title: 'Components/OfferCard',
  component: OfferCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    data: {
      control: 'object',
    }
  },
};

export default meta;
type Story = StoryObj<OfferCardComponent>;

const data: OfferData = {
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

export const Playground: Story = {
  args: {
    data
  },
  render: (args) => ({
    component: OfferCardComponent,
    props: args,
    template: `
      <belka-test-offer-card [data]="data"></belka-test-offer-card>
    `,
  }),
};
