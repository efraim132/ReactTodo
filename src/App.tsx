import { Box, Button, Stack } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import TodoActionMenu from "./components/todoActionMenu";
import "./App.css";
import TodoList from "./components/todoList";
import { InlineMessage } from "@primer/react/experimental";
import { useState } from "react";
import SizedInlineMessage from "./components/SizedInlineMessage";
import TodoDisplay from "./components/TodoDisplay";
import TaskEditor from "./components/TaskEditor";
import type { TodoItem } from "./types/TodoItem";

export default function App() {
  let [editingMode, setEditingMode] = useState(false);

  function toggleEditingMode() {
    setEditingMode(!editingMode);
    console.log(editingMode);
  }

  function onNewTaskHandler(name: String, task: String, time: number): void {
    const dataID = (data.length > 0 ? data[data.length - 1].id : 0) + 1;

    let dataVar: TodoItem = {
      id: dataID,
      name: name as string,
      task: task as string,
      updatedAt: time,
    };

    console.log("New ID", dataID);
    const newData = [...data, dataVar];
    setData(newData);
    console.log(dataVar);
    toggleEditingMode();
  }

  function clearTasks() {
    setData([]);
  }

  const now = Date.now();
  const Second = 1000;
  const Minute = 60 * Second;
  const Hour = 60 * Minute;
  const Day = 24 * Hour;
  const Week = 7 * Day;
  const Month = 4 * Week;

  const [data, setData] = useState<TodoItem[]>([
    //Default data
    {
      id: 1,
      name: "Efraim",
      task: "Do Laundry",
      updatedAt: now - 2 * Day,
    },
    {
      id: 2,
      name: "Alice",
      task: "Buy Groceries",
      updatedAt: now - 3 * Hour,
    },
    {
      id: 3,
      name: "Bob",
      task: "Prepare Presentation",
      updatedAt: now - 1 * Week,
    },
    {
      id: 4,
      name: "Charlie",
      task: "Clean the House",
      updatedAt: now - 5 * Day,
    },
    {
      id: 5,
      name: "Diana",
      task: "Finish Homework",
      updatedAt: now - 12 * Hour,
    },
    {
      id: 6,
      name: "Eve",
      task: "Plan Vacation",
      updatedAt: now - 2 * Month,
    },
  ]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--bgColor-inset)",
          borderRadius: "var(--borderRadius-medium)",
          padding: "var(--stack-padding-spacious)",
          border: "var(--borderWidth-thin) solid var(--borderColor-muted)",
        }}
      >
        <Box
          className="mb-2"
          as="h2"
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <MarkGithubIcon size={64} /> Efraim's TODO App
        </Box>

        {!editingMode ? (
          <TodoDisplay
            data={{ data }}
            setEditingMode={toggleEditingMode}
            onClear={clearTasks}
          />
        ) : (
          <TaskEditor
            onNewTask={onNewTaskHandler}
            setEditingMode={toggleEditingMode}
          />
        )}
      </Box>
    </>
  );
}
