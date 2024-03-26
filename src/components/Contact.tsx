import { Mail, PhoneCall, PhoneForwardedIcon, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-200 fixed top-0 left-0 w-full z-20">
      <div className="max-w-screen-2xl flex items-center justify-center gap-6 lg:gap-0 lg:justify-between px-20 xl:px-28 py-8 mx-auto">
        <a className="flex gap-3 items-center" href="tel:1234567890">
          <PhoneCall stroke="red" size={"30"} />{" "}
          <span className="hidden lg:block">SAVDO BO'LIMI</span>
        </a>

        <a
          className="flex gap-3 items-center"
          href="mailto:yourname@example.com"
        >
          <Mail stroke="red" size={"30"} />{" "}
          <span className="hidden lg:block">EMAIL ORQALI BOGLANISH</span>
        </a>

        <a className="flex gap-3 items-center" href="tel:1234567890">
          <PhoneForwardedIcon stroke="red" size={"30"} />{" "}
          <span className="hidden lg:block">WHATSAP ORQALI BOGLANISH</span>
        </a>
        <a className="flex gap-3 items-center" href="https://youtube.com">
          <Youtube stroke="red" size={"30"} /> <span className="hidden lg:block">YOUTUBE SAHIFAMIZ</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
