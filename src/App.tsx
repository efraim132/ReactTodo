import { Box, Button, Stack } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import TodoActionMenu from "./components/todoActionMenu";
import "./App.css";
import TodoList from "./components/todoList";
import { InlineMessage } from "@primer/react/experimental";
import { useState } from "react";
import SizedInlineMessage from "./components/SizedInlineMessage";
import TodoDisplay from "./components/TodoDisplay";

export default function App() {
  let [editingMode, setEditingMode] = useState(false);

  function toggleEditingMode() {
    setEditingMode(!editingMode);
  }

  const now = Date.now();
  const Second = 1000;
  const Minute = 60 * Second;
  const Hour = 60 * Minute;
  const Day = 24 * Hour;
  const Week = 7 * Day;
  const Month = 4 * Week;

  const data: Array<{
    id: number;
    name: string;
    type: "Public" | "Internal";
    updatedAt: number;
    securityFeatures: {
      dependabot: string;
      codeScanning: string;
    };
  }> = [
    {
      id: 1,
      name: "codeql-dca-worker",
      type: "Internal",
      updatedAt: now,
      securityFeatures: {
        dependabot: "Alerts",
        codeScanning: "Report secrets",
      },
    },
    {
      id: 2,
      name: "aegir",
      type: "Public",
      updatedAt: now - 5 * Minute,
      securityFeatures: {
        dependabot: "Alerts",
        codeScanning: "Report secrets",
      },
    },
    {
      id: 3,
      name: "strapi",
      type: "Public",
      updatedAt: now - 1 * Hour,
      securityFeatures: {
        dependabot: "",
        codeScanning: "",
      },
    },
    {
      id: 4,
      name: "codeql-ci-nightlies",
      type: "Public",
      updatedAt: now - 6 * Hour,
      securityFeatures: {
        dependabot: "Alerts",
        codeScanning: "",
      },
    },
    {
      id: 5,
      name: "dependabot-updates",
      type: "Public",
      updatedAt: now - 1 * Day,
      securityFeatures: {
        dependabot: "",
        codeScanning: "",
      },
    },
    {
      id: 6,
      name: "tsx-create-react-app",
      type: "Public",
      updatedAt: now - 1 * Week,
      securityFeatures: {
        dependabot: "",
        codeScanning: "",
      },
    },
    {
      id: 7,
      name: "bootstrap",
      type: "Public",
      updatedAt: now - 1 * Month,
      securityFeatures: { dependabot: "Alerts", codeScanning: "" },
    },
    {
      id: 8,
      name: "docker-templates",
      type: "Public",
      updatedAt: now - 3 * Month,
      securityFeatures: {
        dependabot: "Alerts",
        codeScanning: "",
      },
    },
  ];

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

        <TodoDisplay data={{ data }} setEditingMode={toggleEditingMode} />
      </Box>
    </>
  );
}
