import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CardComponent } from '../app/components/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Playground: Story = {
  args: {},
  render: (args) => ({
    component: CardComponent,
    props: args,
    template: `
      <belka-test-card>
        <div header style="padding: var(--card-padding-right, var(--spacing-lg, 24px))">
          <strong>Header</strong>
        </div>
        <div body> Corpo della card </div>
        <div footer style="padding: var(--card-padding-right, var(--spacing-lg, 24px))"> Footer </div>
      </belka-test-card>
    `,
  }),
};
