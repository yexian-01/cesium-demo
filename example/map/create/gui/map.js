// import * as mars3d from "mars3d"

var map // mars3d.Map三维地图对象

/**
 * 构造bloom效果对象
 * @type {mars3d.BloomEffect}
 */
let bloomEffect

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
var mapOptions = {
  scene: {
    center: { lat: 31.823874, lng: 117.223976, alt: 3509, heading: 0, pitch: -90 }
  },
  control: {
    baseLayerPicker: false
  }
}

function onMounted(mapInstance) {
  map = mapInstance // 记录首次创建的map
  // 构造bloom效果 用于滑动条测试
  bloomEffect = new mars3d.effect.BloomEffect()
  map.addEffect(bloomEffect)
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
function onUnmounted() {
  map = null
}

// 调整亮度 （演示滑动条）
function updateBrightness(val) {
  bloomEffect.brightness = val
}

// 是否运行地图鼠标交互
function enableMapMouseController(value) {
  map.setSceneOptions({
    cameraController: {
      enableZoom: value,
      enableTranslate: value,
      enableRotate: value,
      enableTilt: value
    }
  })
}
