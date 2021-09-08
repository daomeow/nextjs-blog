import path from 'path';
import { getSortedData, getAllIds, getData } from '../utilities';

const familyDirectory = path.join(process.cwd(), 'family');

export function getSortedFamilyData() {
  const allFamilyData = getSortedData(familyDirectory);

  return allFamilyData.sort(({name: a}, {name: b}) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
};

export function getAllFamilyIds() {
  return getAllIds(familyDirectory);     
};

export async function getFamilyData(id) {
  return getData(familyDirectory, id)
};

