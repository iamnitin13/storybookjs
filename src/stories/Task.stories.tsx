import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Task from "../components/Task";
import type { TaskData } from "../types/task";

const TaskData: TaskData = {
  id: "1",
  title: "Test task",
  state: "TASK_INBOX",
};

const ActionsData = {
  onArchiveTask: fn(), //fn() is to stub action used in ui, or to mock the actions
  onPinTask: fn(),
};

const meta = {
  title: "Component/Task", //how to group or categorize the component in the Storybook sidebar
  component: Task, //component itself,
  tags: ["autodocs"], //automatically generate documentation for our components
  args: { task: TaskData, ...ActionsData }, // action argTypes that component expect to mock out the custom event
  //excludeStories:'/.*Data$/ //additional information required by the story but should not be rendered in Storybook
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
