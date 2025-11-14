import Stack from "../components/Stack";

export default {
  title: "Component/Stack",
  component: Stack,
  argTypes: { numberOfChildren: { type: "number" } },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((key) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {key + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind();
Horizontal.args = {
  direction: "row",
  numberOfChildren: 4,
  spacing: 4,
  wrap: false,
};

export const Vertical = Template.bind();
Vertical.args = {
  direction: "column",
  numberOfChildren: 2,
  spacing: 6,
  wrap: false,
};

export const NoSpacing = Template.bind();
NoSpacing.args = {
  direction: "row",
  numberOfChildren: 4,
  spacing: 0,
  wrap: false,
};

export const WrapOverFlow = Template.bind();
WrapOverFlow.args = {
  direction: "row",
  numberOfChildren: 20,
  wrap: true,
};

export const Empty = Template.bind();
Empty.args = {
  direction: "row",
  numberOfChildren: 0,
  wrap: false,
};
