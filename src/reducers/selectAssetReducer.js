import { ASSET_SELECTED } from "../actions/types";

function selectAssetReducer(selectedAsset = null, action) {
  if (action.type === ASSET_SELECTED) {
    return action.payload;
  }
  return selectedAsset;
}

export default selectAssetReducer;
