import {
  Avatar,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@heroui/react";
import Style from "./DashboardTable.module.scss";

const DashboardTable = ({ comments, isloading }) => {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "place",
      label: "Place",
    },
    {
      key: "message",
      label: "Wishes",
    },
  ];

  return (
    <div className={Style.table_container}>
      <div className={Style.heading}>
        <h4>Guest List</h4>
      </div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={comments}
          isLoading={isloading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "name" ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        showFallback
                        src="https://images.unsplash.com/broken"
                        size="sm"
                      />
                      <span style={{ marginLeft: "10px" }}>
                        {getKeyValue(item, columnKey)}
                      </span>
                    </div>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardTable;
