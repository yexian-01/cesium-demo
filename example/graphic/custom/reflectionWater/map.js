// import * as mars3d from "mars3d"

var map // mars3d.Map三维地图对象
var graphicLayer

// 事件对象，用于抛出事件给面板
var eventTarget = new mars3d.BaseClass()

var mapOptions = {
  scene: {
    center: { lat: 31.82191, lng: 117.218956, alt: 442.2, heading: 168.9, pitch: -21.9 }
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

  const tilesetLayer = new mars3d.layer.TilesetLayer({
    name: "合肥天鹅湖",
    type: "3dtiles",
    url: "//data.mars3d.cn/3dtiles/qx-teh/tileset.json",
    position: { lng: 117.218434, lat: 31.81807, alt: 163 },
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 1024,
    dynamicScreenSpaceError: true,
    cullWithChildrenBounds: false,
    skipLevelOfDetail: true,
    preferLeaves: true
  })
  map.addLayer(tilesetLayer)

  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 加一些演示数据
  addDemoGraphic1()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
function onUnmounted() {
  map = null
}

function addDemoGraphic1() {
  // 创建气象数据体渲染模型
  const volumeCloud = new mars3d.graphic.ReflectionWater({
    positions: [
      [117.216386, 31.815376, 35.16],
      [117.222533, 31.81729, 29.21],
      [117.22642, 31.814983, 28.43],
      [117.22681, 31.810739, 28.55],
      [117.212868, 31.811302, 34.4],
      [117.212538, 31.81424, 31.87],
      [117.214681, 31.81402, 32.97]
    ],
    style: {
      normalMap: "/img/textures/waterNormals.jpg", // 水正常扰动的法线图
      ripple: 100,
      reflectivity: 0.8
    },
    attr: { remark: "示例1" }
  })
  graphicLayer.addGraphic(volumeCloud)
}

// 开始绘制
function startDrawGraphic() {
  graphicLayer.startDraw({
    type: "reflectionWater",
    style: {
      normalMap: "/img/textures/waterNormals.jpg", // 水正常扰动的法线图
      ripple: 100,
      reflectivity: 0.9
    }
  })
}
