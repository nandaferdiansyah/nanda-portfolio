import Image from "next/image";
import { HiOutlineBuildingOffice2 as ClientIcon } from "react-icons/hi2";

import Card from "@/common/components/elements/Card";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CLIENTS } from "@/common/constants/clients";

const Clients = () => {
  if (!CLIENTS.length) return null;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Clients" icon={<ClientIcon />} />
        <SectionSubHeading>
          <p>Organisations I have delivered work for.</p>
        </SectionSubHeading>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {CLIENTS.map((client) => {
          const initials = client.name
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("");

          const body = (
            <Card className="flex h-full items-center gap-4 p-5">
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-lg object-contain"
                />
              ) : (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary dark:text-primary-300">
                  {initials}
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

          return client.href ? (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 lg:hover:scale-[1.02]"
            >
              {body}
            </a>
          ) : (
            <div key={client.name}>{body}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
