import Breadcrumbs from "../components/Breadcrumbs";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import FactoryImage from "../assets/factory-image.webp";
const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "Zavodlar haqida", href: "/factories" },
];

const Factories = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <img src={FactoryImage} alt="image of factory" className="w-full" />
        <p className="text-gray-700 my-4">
          KIFATO kompaniyasi o'tgan asrning 90-yillari oxirida o'z faoliyatini
          boshlagan. Biz sovutish, muzlatish va savdo uskunalarini ishlab
          chiqaruvchi mahalliy ishlab chiqaruvchilar orasida tan olingan
          yetakchimiz. Ishlab chiqarilayotgan asbob-uskunalarning benuqson
          qurilish sifati, tejamkorligi, yuqori ishonchliligi va ekologik
          tozaligi bizga yetakchilik mavqeimizni saqlab qolish imkonini beradi.
        </p>
        <h6 className="text-xl my-4 text-gray-800 font-normal">
          KIFATO bugungi kunda:
        </h6>
        <ul className="flex flex-col gap-3 py-5 text-gray-700 list-disc list-inside pl-8">
          <li>Kompaniyaga tegishli 110 000 m2 maydonga ega zamonaviy zavod</li>
          <li>Xodimlarda 600 dan ortiq malakali mutaxassislar ishlaydi</li>
          <li>
            Sovutgich, muzlatish va savdo uskunalari assortimentida 300 dan
            ortiq modellar
          </li>
          <li>
            Eng qat'iy xalqaro standartlarga javob beradigan yangi modellarni
            yaratish bo'yicha doimiy ish
          </li>
        </ul>
        <p className="text-gray-700 my-4">
        Kifato Market do'koni Kifato kompaniyasining mulki bo'lib, sizning e'tiboringizga barcha do'kon formatlari uchun zamonaviy sovutgich uskunalari namunalarini taqdim etadi.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};

export default Factories;
