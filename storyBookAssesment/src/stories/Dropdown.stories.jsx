import React from 'react';
import Dropdown from '../component/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    label: { control: 'text' },
    labelVisibility: {
      control: { type: 'radio' },
      options: ['Visible', 'Hidden'],
    },
    status: {
      control: { type: 'radio' },
      options: ['Unfilled', 'Filled', 'Disabled', 'Error'],
    },
    labelIconVisibility: {
      control: { type: 'radio' },
      options: ['Visible', 'Hidden'],
    },
    leftIconVisibility: {
      control: { type: 'radio' },
      options: ['Visible', 'Hidden'],
    },
    helperText: { control: 'text' },
    required: {
      control: { type: 'radio' },
      options: ['Yes', 'No'],
    },
    text: { control: 'text' },
    type: {
      control: { type: 'radio' },
      options: ['SingleNoIcon', 'SingleRadio', 'Multi'],
    },
    activeItemIndex: { control: 'number' },
    onSelect: { action: 'selected' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Lorem ipsum 1', 'Lorem ipsum 2', 'Lorem ipsum 3'],
  label: 'Label',
  labelVisibility: 'Visible',
  status: 'Unfilled',
  labelIconVisibility: 'Hidden',
  leftIconVisibility: 'Hidden',
  helperText: 'Helper text',
  required: false,
  text: 'Lorem ipsum',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  status: 'Filled',
  text: 'Lorem ipsum 2',
  activeItemIndex: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  status: 'Disabled',
  activeItemIndex: -1,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  status: 'Error',
};
