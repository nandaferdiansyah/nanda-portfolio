import Breakline from "@/common/components/elements/Breakline";
import Card from "@/common/components/elements/Card";
import { PROFILE } from "@/common/constants/profile";
import { SOCIAL_MEDIA } from "@/common/constants/socialMedia";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="space-y-4">
        <p className="leading-7 text-neutral-600 dark:text-neutral-300">
          Open for design engineering work, business process consulting, and
          collaboration. The fastest way to reach me is email or WhatsApp.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-5">
            <p className="text-sm text-neutral-500">Email</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-neutral-800 hover:text-primary dark:text-neutral-200"
            >
              {PROFILE.email}
            </a>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-neutral-500">WhatsApp</p>
            <a
              href={`https://wa.me/${PROFILE.phone_raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 hover:text-primary dark:text-neutral-200"
            >
              {PROFILE.phone}
            </a>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-neutral-500">Location</p>
            <p className="text-neutral-800 dark:text-neutral-200">
              {PROFILE.location}
            </p>
          </Card>

          <Card className="p-5">
            <p className="text-sm text-neutral-500">Work arrangement</p>
            <p className="text-neutral-800 dark:text-neutral-200">
              {PROFILE.location_type}
            </p>
          </Card>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {SOCIAL_MEDIA.filter((item) => item.isShow).map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-700 transition-all duration-300 dark:border-neutral-700 dark:text-neutral-300 lg:hover:scale-105 ${item.className}`}
            >
              {item.icon}
              {item.title}
            </a>
          ))}
        </div>
      </section>

      <Breakline className="my-8" />

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-neutral-800 dark:text-neutral-300">
          Send a message
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
