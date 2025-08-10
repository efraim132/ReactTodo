import { RelativeTime } from "@primer/react";
import { Table, DataTable } from "@primer/react/experimental";
import type { TodoItem } from "../types/TodoItem";

export interface todoProps {
  data: Array<TodoItem>;
}

function TodoList({ data }: todoProps) {
  return (
    <Table.Container>
      <DataTable
        aria-labelledby="repositories-default"
        data={data}
        columns={[
          {
            header: "Author",
            field: "name",
            rowHeader: true,
            width: "growCollapse",
            maxWidth: "80px",
          },
          {
            header: "Task",
            field: "task",
            width: "grow",
            minWidth: "300px",
          },
          {
            header: "Updated",
            field: "updatedAt",
            width: "growCollapse",
            maxWidth: "100px",
            renderCell: (row) => {
              return <RelativeTime date={new Date(row.updatedAt)} />;
            },
          },
        ]}
      />
    </Table.Container>
  );
}

export default TodoList;
