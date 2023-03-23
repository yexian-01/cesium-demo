// import * as mars3d from "mars3d"

var map // mars3d.Map三维地图对象
let tiles3dLayer

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
var mapOptions = {
  scene: {
    center: { lat: 31.2322, lng: 121.44363, alt: 1989, heading: 87, pitch: -25 }
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

  map.basemap = 2017 // 切换到蓝色底图

  tiles3dLayer = new mars3d.layer.OsmBuildingsLayer({
    highlight: {
      type: "click",
      color: "#00FF00"
    },
    popup: "all"
  })
  map.addLayer(tiles3dLayer)

  setStyle1()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
function onUnmounted() {
  map = null
}

function setStyle1() {
  tiles3dLayer.customShader = undefined
  tiles3dLayer.style = undefined
}

function setStyle2() {

  tiles3dLayer.customShader = new Cesium.CustomShader({
    lightingModel: Cesium.LightingModel.UNLIT,
    fragmentShaderText: `
    void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material)
    {
      vec4 position = czm_inverseModelView * vec4(fsInput.attributes.positionEC,1); // 位置

      // 注意shader中写浮点数是，一定要带小数点，否则会报错，比如0需要写成0.0，1要写成1.0
      float _baseHeight = 0.0; // 物体的基础高度，需要修改成一个合适的建筑基础高度
      float _heightRange = 80.0; // 高亮的范围(_baseHeight ~ _baseHeight + _heightRange)
      float _glowRange = 60.0; // 光环的移动范围(高度)

      // 建筑基础色
      float mars_height = position.z - _baseHeight;
      float mars_a11 = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
      float mars_a12 = mars_height / _heightRange + sin(mars_a11) * 0.1;
      material.diffuse = vec3(0.0, 0.0, 1.0); // 颜色
      material.diffuse *= vec3(mars_a12);// 渐变

      // 动态光环
      float time = fract(czm_frameNumber / 360.0);
      time = abs(time - 0.5) * 2.0;
      float mars_h = clamp(mars_height / _glowRange, 0.0, 1.0);
      float mars_diff = step(0.005, abs(mars_h - time));
      material.diffuse += material.diffuse * (1.0 - mars_diff);
    } `
  })
  tiles3dLayer.reload()
}

function setStyle3() {
  tiles3dLayer.customShader = new Cesium.CustomShader({
    lightingModel: Cesium.LightingModel.UNLIT,
    varyings: {
      v_mars3d_normalMC: Cesium.VaryingType.VEC3
    },
    uniforms: {
      u_mars3d_texture: {
        value: new Cesium.TextureUniform({
          url: "/img/textures/buildings.png"
        }),
        type: Cesium.UniformType.SAMPLER_2D
      }
    },
    vertexShaderText: /* glsl */ `
    void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput){
        v_mars3d_normalMC = vsInput.attributes.normalMC;
      }`,
    fragmentShaderText: /* glsl */ `
    void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
      vec3 positionMC = fsInput.attributes.positionMC;
      if (dot(vec3(0.0, 0.0, 1.0), v_mars3d_normalMC) > 0.95) {
        //处理楼顶:统一处理成深色。
        material.diffuse = vec3(0.079, 0.107, 0.111);
      } else {
        //处理四个侧面: 贴一样的图
        float mars3d_width = 100.0;
        float mars3d_height = 100.0;
        float mars3d_textureX = 0.0;
        float mars3d_dotXAxis = dot(vec3(0.0, 1.0, 0.0), v_mars3d_normalMC);
        if (mars3d_dotXAxis > 0.52 || mars3d_dotXAxis < -0.52) {
          mars3d_textureX = mod(positionMC.x, mars3d_width) / mars3d_width;
        } else {
          mars3d_textureX = mod(positionMC.y, mars3d_width) / mars3d_width;
        }
        float mars3d_textureY = mod(positionMC.z, mars3d_height) / mars3d_height;
        material.diffuse = texture(u_mars3d_texture, vec2(mars3d_textureX, mars3d_textureY)).rgb;
      }
    }`
  })
  // tiles3dLayer.reload()
}

function selectColor(col) {
  tiles3dLayer.style = new Cesium.Cesium3DTileStyle({
    color: {
      conditions: [["true", `color("${col}")`]]
    }
  })
}
