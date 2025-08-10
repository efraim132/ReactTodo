import { Button, Stack } from "@primer/react";
import React, { useState } from "react";
import TodoList from "./todoList";
import TodoActionMenu from "./todoActionMenu";
import SizedInlineMessage from "./SizedInlineMessage";
import type { todoProps } from "./todoList";

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

        <TodoActionMenu />
        <SizedInlineMessage visible={incompleteAlert}>
          Some Features are not available right now
        </SizedInlineMessage>

        <Button onClick={() => setIncompleteAlert(!incompleteAlert)}>
          Show Alert!
        </Button>
      </Stack>
    </>
  );
}

export default TodoDisplay;
