import { ASSET_SELECTED } from "./types";

export const fetchAssets = () => {};

export const selectAsset = (asset) => {
  return {
    type: ASSET_SELECTED,
    payload: asset,
  };
};
