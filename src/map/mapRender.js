import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Search from './mapSearch';

function YandexMap() {
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}  width="100%" height="500px" />
      </div>
      <Search />
    </YMaps>
  )
}

export default YandexMap;
