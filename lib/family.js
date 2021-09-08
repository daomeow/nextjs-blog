import path from 'path';
import { getSortedData, getAllIds, getData } from '../utilities';

const familyDirectory = path.join(process.cwd(), 'family');

export function getSortedFamilyData() {
  return getSortedData(familyDirectory);
};

export function getAllFamilyIds() {
  return getAllIds(familyDirectory);     
};

export async function getFamilyData(id) {
  return getData(familyDirectory, id)
};

