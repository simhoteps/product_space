import React from "react";
import CustomTable from "./components/Table";
import users from "./components/Data";

// This example is the most simple possible table

// This example shows how optionally add sorting, paging and filtering
export function AdvancedTableDemo() {
  const data: {
    attributes: { customer: string; ip: string };
    createTime: string;
    customer: string;
    severity: string;
    resource: string;
    status: boolean;
  }[] = users;

  const { items, filtering, sorting, paging, stats } = CustomTable.useTable(
    data,
    {
      sortKey: "customer",
      sortDir: "desc",
      filterKeys: ["customer", "severity", "resource", "createTime", "status"],
      pageSize: 10,
    }
  );

  return (
    <div>
      {/*   <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CustomTable.Search
          value={filtering.filterText}
          onChange={filtering.setFilterText}
        />
        <div>
          Showing {stats.start} - {stats.end} of {stats.totalItems}
        </div>
      </div> */}
      <CustomTable minWidth="500px">
        <CustomTable.Header {...sorting}>
          <CustomTable.Column {...sorting} id="customer">
            Customer
          </CustomTable.Column>
          <CustomTable.Column id="severity">Severity</CustomTable.Column>
          <CustomTable.Column id="resource">Resource Name</CustomTable.Column>
          <CustomTable.Column id="createTime">Last Receive</CustomTable.Column>
          <CustomTable.Column id="status">Options</CustomTable.Column>
        </CustomTable.Header>

        <CustomTable.Body>
          {items.map((item) => (
            <CustomTable.Row key={item.id}>
              <CustomTable.Cell width="80px">{item.customer}</CustomTable.Cell>
              <CustomTable.Cell width="80px">{item.severity}</CustomTable.Cell>
              <CustomTable.Cell width="400px">{item.resource}</CustomTable.Cell>
              <CustomTable.Cell width="250px">
                {item.createTime}
              </CustomTable.Cell>
              <CustomTable.Cell width="130px">
                {item.status === true ? "true" : "false"}
              </CustomTable.Cell>
            </CustomTable.Row>
          ))}
        </CustomTable.Body>
      </CustomTable>

      <div>
        <CustomTable.Paging
          currentPage={paging.currentPage}
          totalPages={paging.totalPages}
          onChange={paging.goTo}
        />
      </div>
    </div>
  );
}
