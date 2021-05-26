// import { FETCH_ASSETS } from "../actions/types";

const assets = [
  {
    id: 0,
    name: "Asset 0",
    parentId: null,
  },
  {
    id: 1,
    name: "Asset 1",
    parentId: null,
  },
  {
    id: 2,
    name: "Asset 2",
    parentId: 1,
  },
  {
    id: 3,
    name: "Asset 3",
    parentId: 1,
  },
  {
    id: 4,
    name: "Asset 4",
    parentId: 3,
  },
];

function fetchAssetsReducer(state = null, action) {
  return assets;
}

export default fetchAssetsReducer;
