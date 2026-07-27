import Image from "next/image";
import { HiOutlineBuildingOffice2 as ClientIcon } from "react-icons/hi2";

import Card from "@/common/components/elements/Card";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CLIENTS, type ClientProps } from "@/common/constants/clients";

const getInitials = (name: string) =>
  name
    .replace(/^PT\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ClientCard = ({ client }: { client: ClientProps }) => (
  <Card className="flex h-full items-center gap-4 p-5">
    {client.logo ? (
      // White tile keeps dark brand marks readable in both themes.
      <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white p-1.5 dark:border-neutral-700">
        <Image
          src={client.logo}
          alt={client.name}
          width={64}
          height={48}
          className="h-full w-full object-contain"
        />
      </span>
    ) : (
      <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary dark:text-primary-300">
        {getInitials(client.name)}
      </span>
    )}

    <div>
      <p className="font-medium text-neutral-800 dark:text-neutral-200">
        {client.name}
      </p>
      {client.note && (
        <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
          {client.note}
        </p>
      )}
    </div>
  </Card>
);

const Clients = () => {
  if (!CLIENTS.length) return null;

  const named = CLIENTS.filter((client) => !client.isSummary);
  const summary = CLIENTS.find((client) => client.isSummary);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Clients and Cooperation" icon={<ClientIcon />} />
        <SectionSubHeading>
          <p>Organisations I have delivered work with and for.</p>
        </SectionSubHeading>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {named.map((client) =>
          client.href ? (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 lg:hover:scale-[1.02]"
            >
              <ClientCard client={client} />
            </a>
          ) : (
            <div key={client.name}>
              <ClientCard client={client} />
            </div>
          ),
        )}
      </div>

      {summary && (
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-neutral-400 py-6 text-center dark:border-neutral-700">
          <p className="font-medium text-neutral-800 dark:text-neutral-200">
            {summary.name}
          </p>
          {summary.note && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {summary.note}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Clients;
