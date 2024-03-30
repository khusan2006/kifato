import MaxWidthWrapper from "../components/MaxWidthWrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesSlider from "../components/ServicesSlider";
import { SlidersVerticalIcon } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "Xizmat va Kafolat", href: "/services" },
];

const Services = () => {
  return (
    <div className="bg-gray-100 pb-12">
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <ServicesSlider />
        <div className="bg-red-500 text-white flex  flex-col md:flex-row py-8 px-10 border-[2px] shadow-lg gap-4 border-white">
          <SlidersVerticalIcon size={"100"} stroke="white" />
          <div className="">
            <h5
              className="text-2xl  underline mb-4"
              style={{ wordSpacing: "1.5rem" }}
            >
              Bular. sovutish uskunalariga texnik xizmat ko'rsatish va
              ta'mirlash
            </h5>
            <p>
              KIFATO o'rnatish va texnik xizmat ko'rsatishning to'liq spektrini
              taklif qiladi. Biz har qanday talablarga tezda javob bera oladigan
              yuqori malakali mutaxassislar jamoasiga kafolat beramiz; texnik
              maslahat va eng mos echimni tez va samarali o'rnatish.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h5 className="text-2xl text-center my-6 text-red-500 font-semibold">
            Bajariladigan ishlar ro'yxati
          </h5>
          <div className="w-full h-[2px] bg-red-500" />
          <ul className="flex flex-col gap-3 py-8 font-semibold list-disc list-inside pl-8">
            <li>Uskunaning texnik holatini tekshirish</li>
            <li>
              Tarkibiy qismlar va agregatlarni tashqi shikastlanishlar va
              mahkamlashlarning ishonchliligi yo'qligi uchun tekshirish
            </li>
            <li>
              Kondanserni chang va axloqsizlikdan tozalash, fanning to'g'ri
              aylanish yo'nalishini tekshirish
            </li>
            <li>
              Kompressorni, fan motorlarini, asboblarni va apparatlarni tozalash
              (agar kerak bo'lsa)
            </li>
            <li>kompressorning ishlashini tekshirish</li>
            <li>
              Elektr davrlarining yaxlitligini tekshirish, kontaktlarni
              mahkamlash
            </li>
            <li>Nazorat qilish uskunalarini tekshirish va sozlash</li>
            <li>Harorat sharoitlarini tekshirish va sozlash</li>
            <li>
              Yog'ning darajasini, shaffofligini va tozaligini tekshirish
              (masofadagi sovuq uchun)
            </li>
            <li>ta'minot kuchlanishini tekshirish</li>
            <li>
              Komponentlar va agregatlarni shoshilinch ta'mirlash, bepul
              almashtirish
            </li>
            <li>1 yil kafolat</li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Services;
