import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const clients = [
    new Client("Galeno", 19, "1"),
    new Client("Lua", 18, "2"),
    new Client("Gusta", 18, "3"),
    new Client("Isa", 13, "4"),
    new Client("Apollo", 17, "5"),
  ];

  function selectedClient(client: Client) {
    console.log(client.name);
  }
  function deletedClient(client: Client) {
    console.log(`usuário ${client.name} foi apagado`);
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center bg-gradient-to-r
      from-purple-500 to-blue-300 text-white`}
    >
      <Layout title="Simple | Sig-in">
        <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
      </Layout>
    </div>
  );
}
