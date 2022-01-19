import React, { useState } from "react";
import Client from "../core/Client";
import Entry from "./Entry";
import Button from "../components/button";

interface FormProps {
  client: Client;
  clientChanged?: (client: Client) => void;
  cancel?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id ? <Entry text="Code" value={id} /> : false}
      <Entry text="Name" value={name} changedValue={setName} className="mb-2" />
      <Entry
        text="Age"
        type="number"
        value={age}
        changedValue={setAge}
        className="mb-2"
      />
      <div className="flex justify-end mt-5">
        <Button onClick={()=> props.clientChanged?.(new Client(name, +age, id))}
        className="mr-2 bg-gradient-to-r from-blue-400 to-blue-600">
          {id ? "Change" : "Save"}
        </Button>
        <Button
          onClick={props.cancel}
          className="bg-gradient-to-r from-gray-400 to-gray-600"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
