import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="space-y-4 rounded-2xl border border-base-200/80 bg-base-200/60 p-6 shadow-md"
    >
      <p className="text-xs uppercase tracking-[0.4em] text-secondary">Contact</p>
      <h2 className="text-2xl font-semibold text-primary-content">
        Let’s build something together
      </h2>
      <p className="text-base text-base-content/80">
        I’m always interested in collaborating on thoughtful product and AI
        experiences. Ping me for mentorship, freelance, or full-time
        conversations.
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href="mailto:ola@example.com"
          className="rounded-full border border-secondary/40 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
        >
          ola@example.com
        </a>
        <a
          href="https://linkedin.com"
          className="rounded-full border border-base-content/30 px-4 py-2 text-sm font-semibold text-base-content transition hover:border-secondary hover:text-secondary"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
