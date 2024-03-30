import { useForm } from "react-hook-form";
import { FormData } from "../types";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../slices/CartSlice";
import { createOrder } from "../api/order";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const BREADCRUMBS = [
  { id: 1, name: "Asosiy", href: "/" },
  { id: 2, name: "buyurtma", href: "/checkout" },
];

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const items = useSelector(getCart);
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["order"],
    mutationFn: createOrder,
  });
  const onSubmit = (data: FormData) => {
    const tovars = items.map((product) => product.productId).join(" ");
    const res = {
      ism: data.firstName,
      familya: data.lastName,
      mamlakat: data.country,
      kompaniya: data.companyName,
      address: data.address,
      shahar: data.city,
      tuman: data.district,
      pochta: Number(data.postalCode),
      telefon: data.phone,
      email: data.email,
      tovarlar: tovars,
    };
    mutate(res);
    dispatch(clearCart())
  };
  if (isSuccess) navigate("/thank-you");
  return (
    <div className="flex justify-center items-center  bg-gray-100 ">
      <MaxWidthWrapper className="mb-12">
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Buyurtma</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ismingiz
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.firstName && (
                  <span className="text-red-500">Majburiy</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Familyangiz
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.lastName && (
                  <span className="text-red-500">Last Name is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mamlakat
                </label>
                <input
                  type="text"
                  id="country"
                  {...register("country", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.country && (
                  <span className="text-red-500">Country is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Komapniya nomi
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("address", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Shahar
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("city", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tuman
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("district", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pochta indeksi
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("postalCode", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefon raqam
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("phone", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Elektron pochta
                </label>
                <input
                  type="text"
                  id="address"
                  {...register("email", { required: true })}
                  className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                />
                {errors.address && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <button
                disabled={isPending}
                type="submit"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
              >
                Buyurtma berish
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-4">Sizning Buyurtmangiz</h4>
            <div className="flex bg-gray-200">
              <div className="flex-[2] py-3 px-2">Tovarlar</div>
              <div className="flex-[3] py-3 px-2">Summa</div>
            </div>
            {items.map((item) => (
              <div className="flex bg-gray-100">
                <div className="flex-[2] py-3 px-2">
                  <p>{item.name}</p>
                  <p>
                    ${item.unitPrice} × {item.quantity}
                  </p>
                </div>
                <div className="flex-[3] py-3 px-2">₽ {item.totalPrice}</div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Checkout;
