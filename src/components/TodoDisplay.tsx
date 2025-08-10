import { Stack } from "@primer/react";
import TodoList from "./todoList";
import TodoActionMenu from "./todoActionMenu";
import type { todoProps } from "./todoList";

import "./TodoDisplay.css";

interface ToDoDisplayProps {
  data: todoProps;
  setEditingMode: () => void;
  onClear: () => void;
}

function TodoDisplay({ data, setEditingMode, onClear }: ToDoDisplayProps) {
  return (
    <>
      <Stack direction="vertical">
        <h3>Current Tasks</h3>
        <TodoList data={data.data} />
        <div className="controlsHolder">
          <TodoActionMenu
            toggleEditModeFunc={setEditingMode}
            clearTasksFunc={onClear}
          />
        </div>
      </Stack>
    </>
  );
}

export default TodoDisplay;
