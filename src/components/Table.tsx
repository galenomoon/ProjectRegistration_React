import Client from "./../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.deletedClient || props.selectedClient;
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-3">Code</th>
        <th className="text-left p-3">Name</th>
        <th className="text-left p-3">Age</th>
        {showActions ? <th className="text-center p-3">Actions</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left pl-3">{client.id}</td>
          <td className="text-left pl-3">{client.name}</td>
          <td className="text-left pl-3">{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className={`flex justify-center`}>
        {/* ================================ EDIT BUTTON ================================  */}
        {props.selectedClient ? (
          <button onClick={()=>props.selectedClient?.(client)}
            className={`
            flex justify-center items-center
            text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {IconEdit}
          </button>
        ) : (
          false
        )}
        {/* ================================ TRASH BUTTON ================================  */}
        {props.deletedClient ? (
          <button onClick={()=>props.deletedClient?.(client)}
            className={`
            flex justify-center items-center
            text-red-800 rounded-full hover:bg-purple-50 p-2 m-1`}
          >
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`
      text-gray-100
      bg-gradient-to-r from-purple-700 to-blue-700 
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
