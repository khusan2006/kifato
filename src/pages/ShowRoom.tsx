import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "Showrumlar", href: "/showroom" },
];

const ShowRoom = () => {
  return (
    <MaxWidthWrapper>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <div className="showroom">
        <div className="showroom__row">
          <div className="py-[20px] px-0 flex justify-center flex-wrap gap-[20px]">
            <div className="max-w-[280px] p-[10px] shadow-md">
              <span
                className="block mb-[20px] text-[18px] text-center"
                id="piter"
              >
                Sankt-Peterburgdagi Showrum
              </span>
              <div className="flex flex-col gap-[20px] ">
                <div className="w-[100%] h-[200px] border">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ffbfb8856ed897549347b304db0589bc0e2a383fa7e0a73540e57f85fa3be46&amp;source=constructor"
                    width="100%"
                    height="100%"
                    //   frameborder="0"
                    style={{ border: "0" }}
                  ></iframe>
                </div>
                <div className="flex flex-col gap-[15px] text-[14px] text-[#000]">
                  <a
                    href="+79218926968"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/phone-red.svg"
                      alt="phone"
                      width="25"
                      height="25"
                    />
                    +7 (921) 892-69-68
                  </a>
                  <a
                    href="mailto:spb@kifato.com"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/mail.svg"
                      alt="mail"
                      width="25"
                      height="25"
                    />
                    spb@kifato.com
                  </a>
                  <span className="flex items-center gap-[15px]">
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/11/address-red.svg"
                      alt="address"
                      width="25"
                      height="25"
                    />
                    Sankt-Peterburg, Rivojlanish 69А, bino 102, 3 qavat, ofis
                    306 <br />
                    Skandinaviya Biznes Markazi
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-[280px] p-[10px] shadow-md">
              <span
                className="block mb-[20px] text-[18px] text-center"
                id="piter"
              >
                Moskvadagi Showrum
              </span>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[100%] h-[200px] border">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A0110a7584a917021afa5d53b15d5f7f722b8dce528592cc80170df64d4fbcdb7&amp;source=constructor"
                    width="100%"
                    height="100%"
                    //   frameborder="0"
                    style={{ border: "0" }}
                  ></iframe>
                </div>
                <div className="flex flex-col gap-[15px] text-[14px] text-[#000]">
                  <a
                    href="tel:+79299296968"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/phone-red.svg"
                      alt="phone"
                      width="25"
                      height="25"
                    />
                    +7 (921) 892-69-68
                  </a>
                  <a
                    href="mailto:msk@kifato.com"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/mail.svg"
                      alt="mail"
                      width="25"
                      height="25"
                    />
                    msk@kifato.com
                  </a>
                  <span className="flex items-center gap-[15px]">
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/11/address-red.svg"
                      alt="address"
                      width="25"
                      height="25"
                    />
                    Moskva sh. Dmitrov 71B, <br /> 1-etaj, ofis 109 <br />{" "}
                    Biznes markazi-7ONE
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-[280px] p-[10px] shadow-md">
              <span
                className="block mb-[20px] text-[18px] text-center"
                id="piter"
              >
                Krasnodardagi Showrum
              </span>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[100%] h-[200px] border">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Acfb373284a30eb990a8ce993781bff2ed3db28ddbd00215397c5396a518882f8&amp;source=constructor"
                    width="100%"
                    height="100%"
                    //   frameborder="0"
                    style={{ border: "0" }}
                  ></iframe>
                </div>
                <div className="flex flex-col gap-[15px] text-[14px] text-[#000]">
                  <a
                    href="+79892226968"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/phone-red.svg"
                      alt="phone"
                      width="25"
                      height="25"
                    />
                    +7 (989) 222-69-68
                  </a>

                  <a
                    href="mailto:kdr@kifato.com"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/mail.svg"
                      alt="mail"
                      width="25"
                      height="25"
                    />
                    kdr@kifato.com
                  </a>
                  <span className="flex items-center gap-[15px]">
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/11/address-red.svg"
                      alt="address"
                      width="25"
                      height="25"
                    />
                    Krasnodar sh. Rostov, 23
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-[280px] p-[10px] shadow-md">
              <span
                className="block mb-[20px] text-[18px] text-center"
                id="piter"
              >
                Rostov-na-Donu dagi Showrum
              </span>
              <div className="flex flex-col gap-[20px]">
                <div className="w-[100%] h-[200px] border">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae624e8548ccd2a906264bed94f064daf5e9a8c2fcd8b305c357da9cd445433da&amp;source=constructor"
                    width="100%"
                    height="100%"
                    //   frameborder="0"
                    style={{ border: "0" }}
                  ></iframe>
                </div>
                <div className="flex flex-col gap-[15px] text-[14px] text-[#000]">
                  <a
                    href="+79286076968"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/phone-red.svg"
                      alt="phone"
                      width="25"
                      height="25"
                    />
                    +7 (928) 607-69-68
                  </a>
                  <a
                    href="mailto:kdr@kifato.com"
                    className="flex items-center gap-[15px]"
                  >
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/08/mail.svg"
                      alt="mail"
                      width="25"
                      height="25"
                    />
                    rsd@kifato.com
                  </a>
                  <span className="flex items-center gap-[15px]">
                    <img
                      decoding="async"
                      src="https://kifatomarket.com/wp-content/uploads/2023/11/address-red.svg"
                      alt="address"
                      width="25"
                      height="25"
                    />
                    Rostov na Donu
                    <br /> ave. Mikhail Nagibina 301,
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ShowRoom;
