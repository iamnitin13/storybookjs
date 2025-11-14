import Button from "../components/Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: { handlerClick: { action: "handlerClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind();
Red.args = {
  label: "Press Me",
  backgroundColor: "red",
  size: "lg",
};

export const Green = Template.bind();
Green.args = {
  label: "Press Me",
  backgroundColor: "green",
  size: "md",
};

export const Small = Template.bind();
Small.args = {
  label: "Press Me",
  backgroundColor: "red",
  size: "sm",
};

export const LongLabel = Template.bind();
LongLabel.args = {
  label: "Long Label Random Button Click Me",
  backgroundColor: "red",
  size: "md",
};
