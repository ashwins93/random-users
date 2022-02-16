import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import Button from "./components/Button";
import Card from "./components/Card";
import ContactCard from "./components/ContactCard";
import Spinner from "./components/Spinner";
import SwitchToggle from "./components/SwitchToggle";

const contacts = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Fernando",
      last: "Marin",
    },
    location: {
      street: {
        number: 9679,
        name: "Calle de Argumosa",
      },
      city: "Granada",
      state: "Región de Murcia",
      country: "Spain",
      postcode: 11196,
      coordinates: {
        latitude: "-18.6197",
        longitude: "-140.5866",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "fernando.marin@example.com",
    login: {
      uuid: "581f55f0-0527-4ab2-b3f7-1b21725df3c3",
      username: "yellowladybug173",
      password: "civic",
      salt: "dwjCQTjm",
      md5: "1e35166bd88f3f0c1e3de347dc79a2d7",
      sha1: "6e137fe1f0637162a5e86671112760b324e7cc79",
      sha256:
        "3ab6324d6fde87f475f03d8f7a62ce06b86c6288c7296263ae68e2d917bb40dc",
    },
    dob: {
      date: "1983-05-13T17:36:29.327Z",
      age: 39,
    },
    registered: {
      date: "2005-05-12T02:14:14.219Z",
      age: 17,
    },
    phone: "941-389-271",
    cell: "615-944-110",
    id: {
      name: "DNI",
      value: "19471512-E",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    },
    nat: "ES",
  },
];

function fetchRandomUsers({
  count,
  male,
  female,
}: {
  count: number;
  male: boolean;
  female: boolean;
}) {
  const url = new URL("https://randomuser.me/api");

  url.searchParams.set("results", count.toString());

  let gender = [];

  if (male) {
    gender.push("male");
  }

  if (female) {
    gender.push("female");
  }

  if (gender.length) {
    url.searchParams.set("gender", gender.join(","));
  }

  console.log(url.toString());
  return fetch(url.toString()).then((res) => res.json());
}

function ContactList({ contacts }: { contacts: any[] }) {
  return (
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2">
      {contacts.map((contact: any) => (
        <ContactCard key={contact?.login?.username} contact={contact} />
      ))}
    </div>
  );
}

function App() {
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);
  const [count, setCount] = useState(6);
  const { data, error, isLoading, isFetching, isError } = useQuery(
    ["users", male, female, count],
    () => fetchRandomUsers({ count, male, female }),
    {
      placeholderData: {
        results: [],
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  const queryClient = useQueryClient();

  return (
    <div className="py-8">
      <h1 className="text-center text-4xl text-white font-light my-6">
        Random users
      </h1>
      <div className="max-w-5xl mx-auto px-4 space-y-7">
        <form
          className="space-y-7"
          onSubmit={(e) => {
            e.preventDefault();
            queryClient.invalidateQueries("users");
          }}
        >
          <div className="p-1 flex items-center space-x-3">
            <div className="text-white text-sm">Filter:</div>
            <SwitchToggle
              className="sr-only"
              checked={male}
              onChange={() => setMale((prev) => !prev)}
              text="Male"
            />
            <SwitchToggle
              className="sr-only"
              checked={female}
              onChange={() => setFemale((prev) => !prev)}
              text="Female"
            />
          </div>
          <div className="flex space-x-3 items-center text-white text-sm">
            <span>Show</span>
            <input
              className="bg-transparent border-b-2 p-1 w-12 transition focus:outline-none focus:border-b-sand"
              type="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <span>Results</span>
          </div>
          <div className="flex items-center space-x-5">
            <Button type="submit">Randomize</Button>
            {isLoading || isFetching ? <Spinner /> : null}
          </div>
        </form>
        {!isLoading && !isError ? (
          <ContactList contacts={data.results} />
        ) : null}
        {isError ? (
          <div className="text-red-500">{(error as Error).toString()}</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
