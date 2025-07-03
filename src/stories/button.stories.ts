import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'belka-test-components';
import { ChevronRight } from 'lucide-angular';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    size: { control: 'select', options: ['xl', 'base'] },
    expand: { control: 'select', options: ['full', 'base'] },
    color: { control: 'select', options: ['primary', 'secondary'] },
    click: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Playground: Story = {
  args: {
    id: 'btn-primary',
    label: 'Bottone',
    size: 'xl',
    expand: 'full',
    color: 'primary',
  },
  render: (args) => ({
    component: ButtonComponent,
    props: args,
    template: `
      <belka-test-button
        [label]="label"
        [attr.expand]="expand"
        [attr.size]="size"
        [attr.color]="color"
        (click)="click.emit($event)">
        Bottone
      </belka-test-button>
    `,
  }),
};

export const Primary: Story = {
  args: {
    id: 'btn-primary',
    label: 'Bottone',
    size: 'xl',
    expand: 'auto',
    color: 'primary',
  },
  render: (args) => ({
    component: ButtonComponent,
    props: args,
    template: `
      <belka-test-button
        [label]="label"
        [attr.expand]="expand"
        [attr.size]="size"
        [attr.color]="color"
        (click)="click.emit($event)">
        Bottone
      </belka-test-button>
    `,
  }),
};

export const Secondary: Story = {
  args: {
    id: 'btn-primary',
    label: 'Bottone',
    size: 'xl',
    expand: 'auto',
    color: 'secondary',
  },
  render: (args) => ({
    component: ButtonComponent,
    props: args,
    template: `
      <belka-test-button
        [label]="label"
        [attr.expand]="expand"
        [attr.size]="size"
        [attr.color]="color"
        (click)="click.emit($event)">
        Bottone
      </belka-test-button>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    id: 'btn-primary',
    label: 'Bottone',
    size: 'xl',
    expand: 'auto',
    color: 'primary',
    iconOptions: {
      icon: ChevronRight,
    }
  },
  render: (args) => ({
    component: ButtonComponent,
    props: args,
    template: `
      <belka-test-button
        [label]="label"
        [attr.expand]="expand"
        [attr.size]="size"
        [attr.color]="color"
        [iconOptions]="iconOptions"
        (click)="click.emit($event)">
        Bottone
      </belka-test-button>
    `,
  }),
};

export const FullWidth: Story = {
  args: {
    id: 'btn-primary',
    label: 'Bottone',
    size: 'xl',
    expand: 'full',
    color: 'primary',
  },
  render: (args) => ({
    component: ButtonComponent,
    props: args,
    template: `
      <belka-test-button
        [label]="label"
        [attr.expand]="expand"
        [attr.size]="size"
        [attr.color]="color"
        (click)="click.emit($event)">
        Bottone
      </belka-test-button>
    `,
  }),
};
