const YandexMap = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0110a7584a917021afa5d53b15d5f7f722b8dce528592cc80170df64d4fbcdb7&amp;source=constructor"
        width="100%"
        height="100%"
        //   frameborder="0"
        style={{ border: "0" }}
      ></iframe>
    </div>
  );
};

export default YandexMap;
