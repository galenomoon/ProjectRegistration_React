import Button from "../components/button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Form from "../components/Form";
import useClients from "../hooks/useClient";

export default function Home() {
  const {
    client,
    clients,
    newClient,
    saveClient,
    selectedClient,
    deleteClient,
    tableVisible,
    showTable,
  } = useClients();

  return (
    <div
      className={`
      flex h-screen justify-center items-center bg-gradient-to-r
      from-purple-500 to-blue-300 text-white`}
    >
      <Layout title="Simple | Sig-in">
        {tableVisible ? (
          <>
            <div className={`flex justify-end`}>
              <Button
                onClick={newClient}
                className="mb-4 bg-gradient-to-r from-green-400 to-green-600"
              >
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            cancel={() => showTable}
          />
        )}
      </Layout>
    </div>
  );
}
