import { combineReducers } from "redux";
import fetchAssetsReducer from "./fetchAssetsReducer";
import selectAssetReducer from "./selectAssetReducer";
import assetMeasurementsReducer from "./assetMeasurementsReducer";
export default combineReducers({
  assets: fetchAssetsReducer,
  selectedAsset: selectAssetReducer,
  assetMeasurements: assetMeasurementsReducer,
});
