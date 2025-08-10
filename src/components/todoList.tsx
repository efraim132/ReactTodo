import { RelativeTime } from "@primer/react";
import { Table, DataTable } from "@primer/react/experimental";

export interface todoProps {
  data: Array<{
    id: number;
    name: string;
    type: "Public" | "Internal";
    updatedAt: number;
    securityFeatures: {
      dependabot: string;
      codeScanning: string;
    };
  }>;
}

function TodoList({ data }: todoProps) {
  return (
    <Table.Container>
      <DataTable
        aria-labelledby="repositories-default"
        data={data}
        columns={[
          {
            header: "Repository",
            field: "name",
            rowHeader: true,
          },
          {
            header: "Type",
            field: "type",
          },
          {
            header: "Updated",
            field: "updatedAt",
            renderCell: (row) => {
              return <RelativeTime date={new Date(row.updatedAt)} />;
            },
          },
          {
            header: "Dependabot",
            field: "securityFeatures.dependabot",
          },
          {
            header: "Code scanning",
            field: "securityFeatures.codeScanning",
          },
        ]}
      />
    </Table.Container>
  );
}

export default TodoList;
