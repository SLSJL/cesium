import Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";

const defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YjA1ZWEzMy02YTgwLTRhNTAtYmQzMy05NzczMTA5MjgyYWIiLCJpZCI6MTA5ODAsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTc4Mjg0MDR9.1tFNayl7pBJqJc3BxnC7j8uGW2k7srRFONLlbjJy6eM";

Cesium.Ion.defaultAccessToken = defaultAccessToken;

let CESIUM;

/**
 *
 * @param {string} divId viewer的容器ID
 * @param {object} opts  初始化viewer的默认配置
 */

const initCesium = (divId, opts) => {
  CESIUM = new Cesium.Viewer(divId, opts);
  return CESIUM;
};

export default {
  Cesium,
  initCesium
};
