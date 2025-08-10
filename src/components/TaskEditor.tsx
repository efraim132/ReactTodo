import { Button, FormControl, Textarea, TextInput } from "@primer/react";
import React, { useState } from "react";
import "./TaskEditor.css";

interface TaskEditorProps {
  setEditingMode: () => void;
  onNewTask: (name: String, task: String, time: number) => void;
}

function TaskEditor({ setEditingMode, onNewTask }: TaskEditorProps) {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");

  function getTime(): number {
    return Date.now();
  }

  return (
    <>
      <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <TextInput
          value={name}
          onChange={(val: React.ChangeEvent<HTMLInputElement>) =>
            setName(val.target.value)
          }
          size="small"
        />
        <FormControl.Caption>Your Name</FormControl.Caption>
      </FormControl>
      <FormControl className="mb-2">
        <FormControl.Label>Task</FormControl.Label>
        <Textarea
          value={task}
          onChange={(val: React.ChangeEvent<HTMLTextAreaElement>) =>
            setTask(val.target.value)
          }
          cols={60}
        />
        <FormControl.Caption>Basic Description of Task</FormControl.Caption>
      </FormControl>
      <div className="buttonHolder">
        <Button
          onClick={() => onNewTask(name, task, getTime())}
          variant="primary"
        >
          Submit
        </Button>
        <Button
          onClick={() => setEditingMode()}
          className="ml-2"
          variant="danger"
        >
          Cancel
        </Button>
      </div>
    </>
  );
}

export default TaskEditor;
