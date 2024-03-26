const ContactUsForm = () => {
  return (
    <div className="bg-red-500 text-white py-8 px-10 ">
      <h3 className="text-2xl  text-center font-medium">
        BIZ BILAN ALOQAGA CHIQING
      </h3>
      <form className="grid grid-cols-2 gap-10 my-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Sizning Ismingiz</label>
          <input className="py-3 px-2 rounded-md" type="text" id="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Sizning Email addresingiz</label>
          <input className="py-3 px-2 rounded-md" type="email" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Sizning telefon raqamingiz</label>
          <input className="py-3 px-2 rounded-md" type="number" id="phone" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Sizning xabaringiz</label>
          <textarea rows={4} id="message" className="rounded-md" />
        </div>
        <div className="flex justify-center">
            
        <button className="py-3 px-16 border-[1.5px] rounded-lg border-white">Yuborish</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
