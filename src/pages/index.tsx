import Button from "../components/button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../backend/db/ClientCollection";

export default function Home() {
  const repo: ClientRepository = new ClientCollection();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      setVisible("table");
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }
  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }
  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }
  function newClient(client: Client) {
    setClient(Client.empty());
    setVisible("form");
  }

  return (
    <div
      className={`
      flex h-screen justify-center items-center bg-gradient-to-r
      from-purple-500 to-blue-300 text-white`}
    >
      <Layout title="Simple | Sig-in">
        {visible === "table" ? (
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
              deletedClient={deletedClient}
            />
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            cancel={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
