import { Button, Stack } from "@primer/react";
import React, { useState } from "react";
import TodoList from "./todoList";
import TodoActionMenu from "./todoActionMenu";
import SizedInlineMessage from "./SizedInlineMessage";
import type { todoProps } from "./todoList";

import "./TodoDisplay.css";

interface ToDoDisplayProps {
  data: todoProps;
  setEditingMode: () => void;
}

function TodoDisplay({ data, setEditingMode }: ToDoDisplayProps) {
  let [incompleteAlert, setIncompleteAlert] = useState(false);

  return (
    <>
      <Stack direction="vertical">
        <h3>Current Tasks</h3>
        <TodoList data={data.data} />
        <div className="controlsHolder">
          <TodoActionMenu toggleEditModeFunc={setEditingMode} />
          <SizedInlineMessage visible={incompleteAlert}>
            Some Features are not available right now
          </SizedInlineMessage>

          <Button onClick={() => setIncompleteAlert(!incompleteAlert)}>
            Show Alert!
          </Button>
        </div>
      </Stack>
    </>
  );
}

export default TodoDisplay;
