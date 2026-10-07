"use client";

const labelClass =
  "font-kefir font-medium text-5xl tracking-[-0.05em] text-beige block mb-4";
const fieldClass =
  "w-full rounded-[24px] bg-beige text-darkgreen px-6 py-3 text-xl font-medium outline-none focus:ring-4 focus:ring-pink/60";

// Frontend only: submission is not wired up yet.
export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-green rounded-[86px] px-10 md:px-[60px] py-14 md:py-[40px] max-w-[1146px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
        <div>
          <label htmlFor="first-name" className={labelClass}>
            first name
          </label>
          <input id="first-name" name="firstName" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="last-name" className={labelClass}>
            last name
          </label>
          <input id="last-name" name="lastName" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            email
          </label>
          <input id="email" name="email" type="email" className={fieldClass} />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className={labelClass}>
          subject line
        </label>
        <input id="subject" name="subject" type="text" className={fieldClass} />
      </div>

      <div className="mt-8">
        <label htmlFor="message" className="font-kefir font-medium text-5xl tracking-[-0.05em] text-beige block mb-4">
          message
        </label>
        <textarea
          id="message"
          name="message"
          className={`${fieldClass} h-[310px] resize-none`}
        />
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="bg-beige text-darkgreen rounded-full px-16 py-5 text-4xl font-medium cursor-pointer"
        >
          send
        </button>
      </div>
    </form>
  );
}
