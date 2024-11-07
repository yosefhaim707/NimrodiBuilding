import { useState, useEffect } from 'react';
import Floor from '../types/Floor';
import data from '../data/building.json';


const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  // get the data from the building.json file
  useEffect(() => {
    setBuildingData(data as Floor[]);
  }, []);




  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return buildingData[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    return buildingData.map((floor:Floor)=>floor.activity);
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
