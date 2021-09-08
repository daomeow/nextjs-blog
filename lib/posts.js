import path from 'path';
import { getSortedData, getAllIds, getData } from '../utilities';

//set filename path with process.cwd()
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const allPostsData = getSortedData(postsDirectory);

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
};

export function getAllPostIds() {
  return getAllIds(postsDirectory);
};

export async function getPostData(id) {
  return getData(postsDirectory, id)
};
