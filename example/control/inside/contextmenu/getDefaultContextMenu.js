// import * as mars3d from "mars3d"
// const Cesium = mars3d.Cesium

// 获取平台内置的右键菜单
function getDefaultContextMenu(map) {
  const that = map.contextmenu

  return [
    {
      text: "查看此处坐标",
      icon: mars3d.Icon.Coordinates,
      show: function (e) {
        return Cesium.defined(e.cartesian)
      },
      callback: (e) => {
        // 经纬度
        const mpt = mars3d.LngLatPoint.fromCartesian(e.cartesian)
        const ptNew = mars3d.PointTrans.proj4Trans([mpt.lng, mpt.lat], "EPSG:4326", mars3d.CRS.CGCS2000_GK_Zone_3)

        const inhtml = `
         经度:${mpt.lng}, 纬度:${mpt.lat}, 海拔:${mpt.alt},

         横坐标:${ptNew[0].toFixed(1)}, 纵坐标:${ptNew[1].toFixed(1)} (CGCS2000)
        `
        globalAlert(inhtml, "位置信息")
      }
    },

    {
      text: "查看当前视角",
      icon: mars3d.Icon.CameraInfo,
      callback: (e) => {
        const mpt = JSON.stringify(map.getCameraView())
        globalAlert(mpt, "当前视角信息")
      }
    },
    {
      text: "视角切换",
      icon: mars3d.Icon.Camera,
      children: [
        {
          text: "允许进入地下",
          icon: mars3d.Icon.UndergroundYes,
          show: function (e) {
            return map.scene.screenSpaceCameraController.enableCollisionDetection
          },
          callback: (e) => {
            map.scene.screenSpaceCameraController.enableCollisionDetection = false
          }
        },
        {
          text: "禁止进入地下",
          icon: mars3d.Icon.UndergroundNo,
          show: function (e) {
            return !map.scene.screenSpaceCameraController.enableCollisionDetection
          },
          callback: (e) => {
            map.scene.screenSpaceCameraController.enableCollisionDetection = true
          }
        },
        {
          text: "绕此处环绕飞行",
          icon: mars3d.Icon.RotatePointStart,
          show: function (e) {
            return e.cartesian && (!that.rotatePoint || !that.rotatePoint?.isStart)
          },
          callback: (e) => {
            if (!that.rotatePoint) {
              that.rotatePoint = new mars3d.thing.RotatePoint()
              map.addThing(that.rotatePoint)
            }
            that.rotatePoint.start(e.cartesian)
          }
        },
        {
          text: "关闭环绕飞行",
          icon: mars3d.Icon.RotatePointStop,
          show: function (e) {
            return that.rotatePoint?.isStart
          },
          callback: (e) => {
            if (that.rotatePoint) {
              that.rotatePoint.stop()
            }
          }
        },

        {
          text: "移动到此处",
          icon: mars3d.Icon.FlyToPoint,
          show: function (e) {
            return Cesium.defined(e.cartesian)
          },
          callback: (e) => {
            const cameraDistance = Cesium.Cartesian3.distance(e.cartesian, map.camera.positionWC) * 0.1

            map.flyToPoint(e.cartesian, {
              radius: cameraDistance, // 距离目标点的距离
              maximumHeight: map.camera.positionCartographic.height
            })
          }
        },
        {
          text: "第一视角站到此处",
          icon: mars3d.Icon.FirstPerspective,
          show: function (e) {
            return Cesium.defined(e.cartesian)
          },
          callback: (e) => {
            map.camera.flyTo({
              destination: mars3d.PointUtil.addPositionsHeight(e.cartesian, 10), // 升高10米
              orientation: {
                heading: map.camera.heading,
                pitch: 0.0,
                roll: 0.0
              },
              maximumHeight: map.camera.positionCartographic.height
            })
          }
        },
        {
          text: "开启键盘漫游",
          icon: mars3d.Icon.KeyboardRoamYes,
          show: function (e) {
            return !map.keyboardRoam.enabled
          },
          callback: (e) => {
            map.keyboardRoam.enabled = true
          }
        },
        {
          text: "关闭键盘漫游",
          icon: mars3d.Icon.KeyboardRoamNo,
          show: function (e) {
            return map.keyboardRoam.enabled
          },
          callback: (e) => {
            map.keyboardRoam.enabled = false
          }
        },
        {
          text: "取消锁定",
          icon: mars3d.Icon.TrackedEntityNo,
          show: function (e) {
            return map.trackedEntity !== undefined
          },
          callback: (e) => {
            map.trackedEntity = undefined
          }
        }
      ]
    },
    {
      text: "三维模型",
      icon: mars3d.Icon.Tileset,
      show: function (e) {
        const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
        return Cesium.defined(model)
      },
      children: [
        {
          text: "显示三角网",
          icon: mars3d.Icon.TilesetWireframeYes,
          show: function (e) {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            return !model.debugWireframe && model._enableDebugWireframe
          },
          callback: (e) => {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            model.debugWireframe = true
          }
        },
        {
          text: "关闭三角网",
          icon: mars3d.Icon.TilesetWireframeNo,
          show: function (e) {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            return model.debugWireframe && model._enableDebugWireframe
          },
          callback: (e) => {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            model.debugWireframe = false
          }
        },
        {
          text: "显示包围盒",
          icon: mars3d.Icon.TilesetBoundingVolumeYes,
          show: function (e) {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            return !model.debugShowBoundingVolume
          },
          callback: (e) => {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            model.debugShowBoundingVolume = true
          }
        },
        {
          text: "关闭包围盒",
          icon: mars3d.Icon.TilesetBoundingVolumeNo,
          show: function (e) {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            return model.debugShowBoundingVolume
          },
          callback: (e) => {
            const model = map.pick3DTileset(e.cartesian) // 拾取绘制返回的模型
            model.debugShowBoundingVolume = false
          }
        }
      ]
    },

    {
      text: "地形服务",
      icon: mars3d.Icon.Terrain,
      show: function (e) {
        return Cesium.defined(e.cartesian)
      },
      children: [
        {
          text: "开启地形",
          icon: mars3d.Icon.TerrainYes,
          show: function (e) {
            return !map.hasTerrain
          },
          callback: (e) => {
            map.hasTerrain = true
          }
        },
        {
          text: "关闭地形",
          icon: mars3d.Icon.TerrainNo,
          show: function (e) {
            return map.hasTerrain
          },
          callback: (e) => {
            map.hasTerrain = false
          }
        },
        {
          text: "显示三角网",
          icon: mars3d.Icon.TerrainWireframeYes,
          show: function (e) {
            return !map.scene.globe._surface.tileProvider._debug.wireframe
          },
          callback: (e) => {
            map.scene.globe._surface.tileProvider._debug.wireframe = true
          }
        },
        {
          text: "关闭三角网",
          icon: mars3d.Icon.TerrainWireframeNo,
          show: function (e) {
            return map.scene.globe._surface.tileProvider._debug.wireframe
          },
          callback: (e) => {
            map.scene.globe._surface.tileProvider._debug.wireframe = false
          }
        }
      ]
    },
    {
      text: "图上量算",
      icon: mars3d.Icon.Measure,
      children: [
        {
          text: "距离",
          icon: mars3d.Icon.MeasureDistance,
          callback: (e) => {
            if (!that.measure) {
              that.measure = new mars3d.thing.Measure()
              map.addThing(that.measure)
            }
            that.measure.distance()
          }
        },
        {
          text: "面积",
          icon: mars3d.Icon.MeasureArea,
          callback: (e) => {
            if (!that.measure) {
              that.measure = new mars3d.thing.Measure()
              map.addThing(that.measure)
            }
            that.measure.area()
          }
        },
        {
          text: "高度差",
          icon: mars3d.Icon.MeasureHeight,
          callback: (e) => {
            if (!that.measure) {
              that.measure = new mars3d.thing.Measure()
              map.addThing(that.measure)
            }
            that.measure.heightTriangle()
          }
        },
        {
          text: "角度",
          icon: mars3d.Icon.MeasureAngle,
          callback: (e) => {
            if (!that.measure) {
              that.measure = new mars3d.thing.Measure()
              map.addThing(that.measure)
            }
            that.measure.angle()
          }
        },
        {
          text: "删除测量",
          icon: mars3d.Icon.Delete,
          show: function (e) {
            return that.measure && that.measure.hasMeasure
          },
          callback: (e) => {
            if (that.measure) {
              that.measure.clear()
            }
          }
        }
      ]
    },

    {
      text: "图上标记",
      icon: mars3d.Icon.Draw,
      children: [
        {
          text: "标记点",
          icon: mars3d.Icon.DrawPoint,
          callback: (e) => {
            map.graphicLayer.startDraw({
              type: "point",
              style: {
                pixelSize: 12,
                color: "#3388ff"
              },
              success: function (graphic) {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(graphic.coordinates))
              }
            })
          }
        },
        {
          text: "标记线",
          icon: mars3d.Icon.DrawPolyline,
          callback: (e) => {
            map.graphicLayer.startDraw({
              type: "polyline",
              style: {
                color: "#55ff33",
                width: 3
              },
              success: function (graphic) {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(graphic.coordinates))
              }
            })
          }
        },
        {
          text: "标记面",
          icon: mars3d.Icon.DrawPolygon,
          callback: (e) => {
            map.graphicLayer.startDraw({
              type: "polygon",
              style: {
                color: "#29cf34",
                opacity: 0.5,
                outline: true,
                outlineWidth: 2.0
              },
              success: function (graphic) {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(graphic.coordinates))
              }
            })
          }
        },
        {
          text: "标记圆",
          icon: mars3d.Icon.DrawCircle,
          callback: (e) => {
            map.graphicLayer.startDraw({
              type: "circle",
              style: {
                color: "#ffff00",
                opacity: 0.6
              },
              success: function (graphic) {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(graphic.coordinates))
              }
            })
          }
        },
        {
          text: "标记矩形",
          icon: mars3d.Icon.DrawRectangle,
          callback: (e) => {
            map.graphicLayer.startDraw({
              type: "rectangle",
              style: {
                color: "#ffff00",
                opacity: 0.6
              },
              success: function (graphic) {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(graphic.coordinates))
              }
            })
          }
        },
        {
          text: "允许编辑",
          icon: mars3d.Icon.DrawEditYes,
          show: function (e) {
            return !map.graphicLayer.hasEdit
          },
          callback: (e) => {
            map.graphicLayer.hasEdit = true
          }
        },
        {
          text: "禁止编辑",
          icon: mars3d.Icon.DrawEditNo,
          show: function (e) {
            return map.graphicLayer.hasEdit
          },
          callback: (e) => {
            map.graphicLayer.hasEdit = false
          }
        },
        {
          text: "导出GeoJSON",
          icon: mars3d.Icon.DrawDownJson,
          show: function (e) {
            return map.graphicLayer.length > 0
          },
          callback: (e) => {
            mars3d.Util.downloadFile("图上标记.json", JSON.stringify(map.graphicLayer.toGeoJSON()))
          }
        },
        {
          text: "清除所有标记",
          icon: mars3d.Icon.Delete,
          show: function (e) {
            return map.graphicLayer.length > 0
          },
          callback: (e) => {
            map.graphicLayer.clear()
          }
        }
      ]
    },
    {
      text: "特效效果",
      icon: mars3d.Icon.Effect,
      children: [
        {
          text: "开启下雨",
          icon: mars3d.Icon.RainEffectYes,
          show: function (e) {
            return !that.rainEffect
          },
          callback: (e) => {
            if (!that.rainEffect) {
              that.rainEffect = new mars3d.effect.RainEffect()
              map.addEffect(that.rainEffect)
            }
          }
        },
        {
          text: "关闭下雨",
          icon: mars3d.Icon.RainEffectNo,
          show: function (e) {
            return that.rainEffect
          },
          callback: (e) => {
            if (that.rainEffect) {
              map.removeEffect(that.rainEffect, true)
              delete that.rainEffect
            }
          }
        },
        {
          text: "开启下雪",
          icon: mars3d.Icon.SnowEffectYes,
          show: function (e) {
            return !that.snowEffect
          },
          callback: (e) => {
            if (!that.snowEffect) {
              that.snowEffect = new mars3d.effect.SnowEffect()
              map.addEffect(that.snowEffect)
            }
          }
        },
        {
          text: "关闭下雪",
          icon: mars3d.Icon.SnowEffectNo,
          show: function (e) {
            return that.snowEffect
          },
          callback: (e) => {
            if (that.snowEffect) {
              map.removeEffect(that.snowEffect, true)
              delete that.snowEffect
            }
          }
        },

        {
          text: "开启雾天气",
          icon: mars3d.Icon.FogEffectYes,
          show: function (e) {
            return !that.fogEffect
          },
          callback: (e) => {
            if (!that.fogEffect) {
              const height = map.camera.positionCartographic.height * 2
              that.fogEffect = new mars3d.effect.FogEffect({
                fogByDistance: new Cesium.Cartesian4(0.1 * height, 0.1, height, 0.8)
              })
              map.addEffect(that.fogEffect)
            }
          }
        },
        {
          text: "关闭雾天气",
          icon: mars3d.Icon.FogEffectNo,
          show: function (e) {
            return that.fogEffect
          },
          callback: (e) => {
            if (that.fogEffect) {
              map.removeEffect(that.fogEffect, true)
              delete that.fogEffect
            }
          }
        },

        {
          text: "开启泛光",
          icon: mars3d.Icon.BloomEffectYes,
          show: function (e) {
            return !that.bloomEffect
          },
          callback: (e) => {
            if (!that.bloomEffect) {
              that.bloomEffect = new mars3d.effect.BloomEffect()
              map.addEffect(that.bloomEffect)
            }
          }
        },
        {
          text: "关闭泛光",
          icon: mars3d.Icon.BloomEffectNo,
          show: function (e) {
            return that.bloomEffect
          },
          callback: (e) => {
            if (that.bloomEffect) {
              map.removeEffect(that.bloomEffect, true)
              delete that.bloomEffect
            }
          }
        },

        {
          text: "开启亮度",
          icon: mars3d.Icon.BrightnessEffectYes,
          show: function (e) {
            return !that.brightnessEffect
          },
          callback: (e) => {
            if (!that.brightnessEffect) {
              that.brightnessEffect = new mars3d.effect.BrightnessEffect()
              map.addEffect(that.brightnessEffect)
            }
          }
        },
        {
          text: "关闭亮度",
          icon: mars3d.Icon.BrightnessEffectNo,
          show: function (e) {
            return that.brightnessEffect
          },
          callback: (e) => {
            if (that.brightnessEffect) {
              map.removeEffect(that.brightnessEffect, true)
              delete that.brightnessEffect
            }
          }
        },

        {
          text: "开启夜视",
          icon: mars3d.Icon.NightVisionEffectYes,
          show: function (e) {
            return !that.nightVisionEffect
          },
          callback: (e) => {
            if (!that.nightVisionEffect) {
              that.nightVisionEffect = new mars3d.effect.NightVisionEffect()
              map.addEffect(that.nightVisionEffect)
            }
          }
        },
        {
          text: "关闭夜视",
          icon: mars3d.Icon.NightVisionEffectNo,
          show: function (e) {
            return that.nightVisionEffect
          },
          callback: (e) => {
            if (that.nightVisionEffect) {
              map.removeEffect(that.nightVisionEffect, true)
              delete that.nightVisionEffect
            }
          }
        },

        {
          text: "开启黑白",
          icon: mars3d.Icon.BlackAndWhiteEffectYes,
          show: function (e) {
            return !that.blackAndWhiteEffect
          },
          callback: (e) => {
            if (!that.blackAndWhiteEffect) {
              that.blackAndWhiteEffect = new mars3d.effect.BlackAndWhiteEffect()
              map.addEffect(that.blackAndWhiteEffect)
            }
          }
        },
        {
          text: "关闭黑白",
          icon: mars3d.Icon.BlackAndWhiteEffectNo,
          show: function (e) {
            return that.blackAndWhiteEffect
          },
          callback: (e) => {
            if (that.blackAndWhiteEffect) {
              map.removeEffect(that.blackAndWhiteEffect, true)
              delete that.blackAndWhiteEffect
            }
          }
        },

        {
          text: "开启拾取高亮",
          icon: mars3d.Icon.OutlineEffectYes,
          show: function (e) {
            return !that.outlineEffect
          },
          callback: (e) => {
            if (!that.outlineEffect) {
              that.outlineEffect = new mars3d.effect.OutlineEffect()
              map.addEffect(that.outlineEffect)
            }
          }
        },
        {
          text: "关闭拾取高亮",
          icon: mars3d.Icon.OutlineEffectNo,
          show: function (e) {
            return that.outlineEffect
          },
          callback: (e) => {
            if (that.outlineEffect) {
              map.removeEffect(that.outlineEffect, true)
              delete that.outlineEffect
            }
          }
        }
      ]
    },
    {
      text: "场景设置",
      icon: mars3d.Icon.Scene,
      children: [
        {
          text: "开启深度监测",
          icon: mars3d.Icon.DepthTestYes,
          show: function (e) {
            return !map.scene.globe.depthTestAgainstTerrain
          },
          callback: (e) => {
            map.scene.globe.depthTestAgainstTerrain = true
          }
        },
        {
          text: "关闭深度监测",
          icon: mars3d.Icon.DepthTestNo,
          show: function (e) {
            return map.scene.globe.depthTestAgainstTerrain
          },
          callback: (e) => {
            map.scene.globe.depthTestAgainstTerrain = false
          }
        },

        {
          text: "显示星空背景",
          icon: mars3d.Icon.SkyBoxYes,
          show: function (e) {
            return !map.scene.skyBox.show
          },
          callback: (e) => {
            map.scene.skyBox.show = true // 天空盒
            map.scene.moon.show = true // 太阳
            map.scene.sun.show = true // 月亮
          }
        },
        {
          text: "关闭星空背景",
          icon: mars3d.Icon.SkyBoxNo,
          show: function (e) {
            return map.scene.skyBox.show
          },
          callback: (e) => {
            map.scene.skyBox.show = false // 天空盒
            map.scene.moon.show = false // 太阳
            map.scene.sun.show = false // 月亮
          }
        },
        {
          text: "开启日照阴影",
          icon: mars3d.Icon.ShadowYes,
          show: function (e) {
            return !map.viewer.shadows
          },
          callback: (e) => {
            map.viewer.shadows = true
            map.viewer.terrainShadows = Cesium.ShadowMode.ENABLED
            map.scene.globe.enableLighting = true
          }
        },
        {
          text: "关闭日照阴影",
          icon: mars3d.Icon.ShadowNo,
          show: function (e) {
            return map.viewer.shadows
          },
          callback: (e) => {
            map.viewer.shadows = false
            map.viewer.terrainShadows = Cesium.ShadowMode.RECEIVE_ONLY
            map.scene.globe.enableLighting = false
          }
        },
        {
          text: "开启大气渲染",
          icon: mars3d.Icon.SkyAtmosphereYes,
          show: function (e) {
            return !map.scene.skyAtmosphere.show
          },
          callback: (e) => {
            map.scene.skyAtmosphere.show = true
            map.scene.globe.showGroundAtmosphere = true
          }
        },
        {
          text: "关闭大气渲染",
          icon: mars3d.Icon.SkyAtmosphereNo,
          show: function (e) {
            return map.scene.skyAtmosphere.show
          },
          callback: (e) => {
            map.scene.skyAtmosphere.show = false
            map.scene.globe.showGroundAtmosphere = false
          }
        },

        {
          text: "场景出图",
          icon: mars3d.Icon.ExpImage,
          callback: (e) => {
            map.expImage()
          }
        }
      ]
    }
  ]
}
