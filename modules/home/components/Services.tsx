import { MdOutlineDesignServices as ServiceIcon } from "react-icons/md";

import Card from "@/common/components/elements/Card";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { PROFILE } from "@/common/constants/profile";

const Services = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="What I Do" icon={<ServiceIcon />} />
        <SectionSubHeading>
          <p>Three areas where I spend most of my working hours.</p>
        </SectionSubHeading>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PROFILE.services.map((service) => (
          <Card key={service.title} className="p-5">
            <h3 className="mb-2 font-medium text-neutral-800 dark:text-neutral-200">
              {service.title}
            </h3>
            <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
