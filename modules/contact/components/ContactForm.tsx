"use client";

import { useState } from "react";
import { FiSend as SendIcon } from "react-icons/fi";
import { HiOutlineCheckCircle as SuccessIcon } from "react-icons/hi";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";

import Card from "@/common/components/elements/Card";
import { PROFILE } from "@/common/constants/profile";

const inputStyles =
  "w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm outline-hidden transition-colors duration-300 focus:border-primary disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-900";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const isSending = status === "sending";
  const isDisabled =
    isSending || !form.name.trim() || !form.email.trim() || !form.message.trim();

  const update =
    (field: keyof typeof form) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isDisabled) return;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          message?: string;
        };
        throw new Error(data.message ?? "Failed to send the message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error
          ? caught.message
          : "Failed to send the message.",
      );
    }
  };

  return (
    <Card className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={update("name")}
              disabled={isSending}
              placeholder="Your name"
              className={inputStyles}
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              disabled={isSending}
              placeholder="you@email.com"
              className={inputStyles}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="text-sm text-neutral-600 dark:text-neutral-400"
          >
            Subject
          </label>
          <input
            id="subject"
            value={form.subject}
            onChange={update("subject")}
            disabled={isSending}
            placeholder="What is this about?"
            className={inputStyles}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="text-sm text-neutral-600 dark:text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={update("message")}
            disabled={isSending}
            placeholder="Tell me about your project or question…"
            className={inputStyles}
          />
        </div>

        {/* Honeypot: hidden from users, catches most spam bots. */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={update("website")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs">
            {status === "success" && (
              <p className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <SuccessIcon size={16} />
                Message sent — I&apos;ll get back to you by email.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                <ErrorIcon size={16} />
                {error} You can also email {PROFILE.email} directly.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50 lg:hover:enabled:scale-105"
          >
            {isSending ? "Sending…" : "Send message"} <SendIcon size={15} />
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
