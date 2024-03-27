import CategoryImage from '../assets/category-image.webp'

const Product = () => {
  return (
    <div className="bg-white md:min-h-[23rem] p-3 shadow-md rounded-sm">
      <img
        src={CategoryImage}
        alt="O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan)."
      />
     <div className='flex flex-col gap-3'>
     <h5 className="text-center mt-2">
        O'rnatilgan blokli o'rta haroratli slaydlar (eshiklar bilan).
     
      </h5>
      <h6 className='text-base text-center'>$2945,45 <span className='text-sm'>(QQsiz)</span></h6>
      <button className='w-full py-2 px-4 bg-red-500 text-white'>Savatga qoshish</button>
     </div>
    </div>
  );
};

export default Product;
