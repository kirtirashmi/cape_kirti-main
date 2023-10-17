import Table from "react-bootstrap/Table";

function CustomTable() {
  return (
    <Table 
      bordered 
      // variant="dark"
    >
      <thead>
        <tr>
          <th>BDR</th>
          <th>Missing Records Count</th>
          <th>Mismatched Records Count</th>
          <th>Additional Data Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Users</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CustomTable;
