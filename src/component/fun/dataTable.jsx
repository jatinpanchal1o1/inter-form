import React from "react";

const DataTable = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {/* {#each people as person} */}
          <tr class="odd:bg-white even:bg-slate-50">
            <td>{person.name}</td>
            <td>{person.title}</td>
            <td>{person.email}</td>
          </tr>
          {/* {/each} */}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
