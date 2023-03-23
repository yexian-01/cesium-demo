// import * as mars3d from "mars3d"

var map // mars3d.Map三维地图对象

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
var mapOptions = {
  control: {
    homeButton: true,
    sceneModePicker: true,
    navigationHelpButton: true,
    infoBox: false,
    vrButton: true,
    fullscreenButton: true,
    geocoder: "gaode",
    baseLayerPicker: true,
    clockAnimate: true, // 时钟动画控制(左下角)
    timeline: true, // 是否显示时间线控件
    compass: { top: "10px", left: "5px" }
  }
}

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
function onMounted(mapInstance) {
  map = mapInstance // 记录map
  map.toolbar.style.bottom = "55px" // 修改toolbar控件的样式

  const control = map.getControl("navigationHelpButton", "type")
  control.on(mars3d.EventType.click, function (event) {
    console.log("您单击了帮助按钮", event)
  })
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
function onUnmounted() {
  map = null
}

// 按钮
function bindPOI(val) {
  map.controls.geocoder.show = val
}

// 视角复位
function bindView(val) {
  map.controls.homeButton.show = val
}

// 基础的地图切换
function bindBaseLayerPicker(val) {
  map.controls.baseLayerPicker.show = val
}

// 全屏切换
function bindFullScreen(val) {
  map.controls.fullscreenButton.show = val
}

// VR
function bindVR(val) {
  map.controls.vrButton.show = val
}

// 帮助按钮
function bindHelpButton(val) {
  map.controls.navigationHelpButton.show = val
}

// 二三维切换
function bindSceneModePicker(val) {
  map.controls.sceneModePicker.show = val
}

function bindZoom(val) {
  map.controls.zoom.show = val
}

// 面板：
// 信息状态栏
function bindLocation(val) {
  map.controls.locationBar.show = val
}

// 时钟
function bindClock(val) {
  map.controls.clockAnimate.show = val
}

// 时间刻度线
function bindTimeLine(val) {
  map.controls.timeline.show = val
}

// 导航球
function bindNav(val) {
  map.controls.compass.show = val
}

// 比例尺
function bindLegend(val) {
  map.controls.distanceLegend.show = val
}

// 图层
function bindLayer(val) {
  document.getElementById("mars-manage-layer-btn").style.display = val ? "inline-block" : "none"
}
