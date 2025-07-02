import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from '../app/components/badge/badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  args: {
    label: 'Variabile',
    color: 'primary',
  },
  render: (args) => ({
    component: BadgeComponent,
    props: args,
    template: `
      <belka-test-badge
        [label]="label"
        [attr.color]="color">
      </belka-test-badge>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    label: 'Variabile',
    color: 'secondary',
  },
  render: (args) => ({
    component: BadgeComponent,
    props: args,
    template: `
      <belka-test-badge
        [label]="label"
        [attr.color]="color">
      </belka-test-badge>
    `,
  }),
};

