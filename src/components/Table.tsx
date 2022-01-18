import Client from "./../core/Client";

interface TableProps {
  clients: Client[];
}

export default function Table(props: TableProps) {
  function renderHeader() {
    return (
      <tr>
        <th className="text-center p-2">Code</th>
        <th className="text-center p-2">Name</th>
        <th className="text-center p-2">Age</th>
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
          <td className="text-center p-1">{client.id}</td>
          <td className="text-center p-1">{client.name}</td>
          <td className="text-center p-1">{client.age}</td>
        </tr>
      );
    });
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
