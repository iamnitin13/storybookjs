export type TaskData = {
  id: string;
  title: string;
  state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";
};

export type TaskProps = {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};
