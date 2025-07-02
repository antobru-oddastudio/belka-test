import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AlertComponent } from '../app/components/alert/alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'base'],
    },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Playground: Story = {
  args: {
    color: 'success',
  },
  render: (args) => ({
    component: AlertComponent,
    props: args,
    template: `
      <belka-test-alert [attr.color]="color">
        Inserisci qualsiasi contenuto qui!
      </belka-test-alert>
    `,
  }),
};
