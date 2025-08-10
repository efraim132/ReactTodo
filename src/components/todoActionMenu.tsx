import { ActionMenu } from "@primer/react";
import { ActionList } from "@primer/react";

interface Props {
  toggleEditModeFunc: () => void;
}

function TodoActionMenu({ toggleEditModeFunc }: Props) {
  return (
    <ActionMenu>
      <ActionMenu.Button>Open menu</ActionMenu.Button>
      <ActionMenu.Overlay>
        <ActionList>
          <ActionList.Item
            onSelect={() => {
              alert("Reset clicked");
            }}
          >
            Reset
          </ActionList.Item>
          <ActionList.Item
            onSelect={() => {
              alert("Return to default clicked");
            }}
          >
            Return to default
          </ActionList.Item>
          <ActionList.Item
            onSelect={() => {
              toggleEditModeFunc();
            }}
          >
            Add new task
          </ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  );
}
export default TodoActionMenu;
