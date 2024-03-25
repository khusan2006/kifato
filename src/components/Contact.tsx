import { Mail, PhoneCall, PhoneForwardedIcon, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-200 flex px-28 py-8 items-center justify-between sticky">
      <a className="flex gap-3 items-center" href="tel:1234567890"><PhoneCall  stroke="red" size={'30'} /> SAVDO BO'LIMI</a>

      <a className="flex gap-3 items-center" href="mailto:yourname@example.com"><Mail stroke="red" size={'30'} /> EMAIL ORQALI BOGLANISH</a>

      <a className="flex gap-3 items-center" href="tel:1234567890"><PhoneForwardedIcon stroke="red" size={'30'} /> WHATSAP ORQALI BOGLANISH</a>
      <a className="flex gap-3 items-center" href="https://youtube.com"><Youtube  stroke="red" size={'30'} /> YOUTUBE</a>
    </section>
  );
};

export default Contact;