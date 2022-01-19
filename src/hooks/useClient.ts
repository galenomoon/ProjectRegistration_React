
import { useEffect, useState } from "react";
import ClientRepository from "../core/ClientRepository";
import ClientCollection from "../backend/db/ClientCollection";
import Client from "../core/Client";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {

    const repo: ClientRepository = new ClientCollection();

    const { tableVisible, formVisible, showTable, showForm } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(getAll, []);

    function getAll() {
        repo.getAll().then((clients) => {
            setClients(clients);
            showTable()
        });
    }

    function selectedClient(client: Client) {
        setClient(client);
        showForm();
    }
    async function deleteClient(client: Client) {
        await repo.delete(client);
        getAll();
    }
    async function saveClient(client: Client) {
        await repo.save(client);
        getAll();
    }
    function newClient(client: Client) {
        setClient(Client.empty());
        showForm();
    }
    return {
        client,
        clients,
        newClient,
        saveClient,
        deleteClient,
        selectedClient,
        getAll,
        tableVisible,
        showTable
    }
}