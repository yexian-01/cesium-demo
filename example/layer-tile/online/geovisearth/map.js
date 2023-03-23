// import * as mars3d from "mars3d"

var map // mars3d.Map三维地图对象

// 星图官方地址：https://datacloud.geovisearth.com/support/map/summary

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
var mapOptions = {
  scene: {
    center: { lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 },
    highDynamicRange: false
  },
  // 方式1：在创建地球前的参数中配置
  basemaps: [
    {
      pid: 10,
      name: "星图影像",
      icon: "/img/basemaps/tdt_img.png",
      type: "group",
      layers: [
        {
          name: "底图",
          type: "xyz",
          url: "https://tiles{s}.geovisearth.com/base/v1/img/{z}/{x}/{y}?token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f",
          subdomains: "123"
        },
        {
          name: "注记",
          type: "xyz",
          url: "https://tiles{s}.geovisearth.com/base/v1/cia/{z}/{x}/{y}?token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f",
          subdomains: "123"
        }
      ],
      show: true
    },
    {
      pid: 10,
      name: "星图电子",
      icon: "/img/basemaps/tdt_vec.png",
      type: "xyz",
      url: "https://tiles{s}.geovisearth.com/base/v1/vec/{z}/{x}/{y}?token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f",
      subdomains: "123"
    }
  ]
}

var eventTarget = new mars3d.BaseClass() // 事件对象，用于抛出事件到面板中

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
function onMounted(mapInstance) {
  map = mapInstance // 记录map
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
function onUnmounted() {
  map = null
}

// 叠加的图层
let tileLayer
function addTileLayer() {
  removeTileLayer()

  // 方式2：在创建地球后调用addLayer添加图层(直接new对应type类型的图层类)
  tileLayer = new mars3d.layer.XyzLayer({
    name: "地形晕渲",
    url: "https://tiles{s}.geovisearth.com/base/v1/ter/{z}/{x}/{y}?token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f",
    subdomains: "123"
  })
  map.addLayer(tileLayer)
}

function removeTileLayer() {
  if (tileLayer) {
    map.removeLayer(tileLayer, true)
    tileLayer = null
  }
}
