import Button from '../component/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'onClick' } },
};

const Template = (args) => <Button {...args} />; //* This is a base function

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  size: 'lg',
  label: 'press ME',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  size: 'sm',
  label: 'press ME',
};
export const Yellow = Template.bind({});
Yellow.args = {
  backgroundColor: 'yellow',
  size: 'lg',
  label: 'press ME',
};
