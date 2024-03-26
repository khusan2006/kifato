import { YMaps, Map } from 'react-yandex-maps';

const YandexMap = () => {
  return (
    <YMaps>
      <div>
        <Map
          defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
          style={{ width: '100%', height: '100%' }}
        >
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
