/* eslint-disable no-undef */
"use script" //开发环境建议开启严格模式

//图层显示隐藏
function isShowLayer(layer, val) {
  // const layer = getManagerLayer()
  layer.show = val
}

// 绑定popup
// function bindPopup(layer, enabledPopup) {
//   // const layer = getManagerLayer()
//   if (enabledPopup) {
//     bindLayerPopup(layer)
//   } else {
//     layer.unbindPopup()
//   }
// }

function bindTooltip(layer, enabledTooltip) {
  // const layer = getManagerLayer()
  if (enabledTooltip) {
    layer.bindTooltip(
      (event) => {
        const attr = getAttrForEvent(event)
        attr["类型"] = event.graphic?.type
        attr["来源"] = "我是layer上绑定的Toolip"
        attr["备注"] = "我支持鼠标移入交互"

        return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr: attr })
      },
      { pointerEvents: true }
    )
  } else {
    layer.unbindTooltip()
  }
}

function bindRinghtMenu(layer, enabledRightMenu) {
  // const layer = getManagerLayer()
  if (enabledRightMenu) {
    bindLayerContextMenu(layery)
  } else {
    layer.unbindContextMenu(true)
  }
}

// 在图层绑定Popup弹窗
function bindLayerPopup() {
  // const graphicLayer = getManagerLayer()
  graphicLayer.bindPopup(
    (event) => {
      const attr = getAttrForEvent(event)
      attr["类型"] = event.graphic?.type
      attr["来源"] = "我是layer上绑定的Popup"
      attr["备注"] = "我支持鼠标交互"

      return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr: attr })

      // return new Promise((resolve) => {
      //   //这里可以进行后端接口请求数据，setTimeout测试异步
      //   setTimeout(() => {
      //     resolve('Promise异步回调显示的弹窗内容信息')
      //   }, 2000)
      // })
    },
    { pointerEvents: true }
  )
}

function getAttrForEvent(event) {
  if (event?.graphic?.attr) {
    return event.graphic.attr
  }
  if (!event.czmObject) {
    return {}
  }

  let attr = event.czmObject._attr || event.czmObject.properties || event.czmObject.attribute
  if (attr && attr.type && attr.attr) {
    attr = attr.attr // 兼容历史数据,V2内部标绘生产的geojson
  }
  return attr ?? {}
}

// 绑定右键菜单
function bindLayerContextMenu() {
  // const graphicLayer = getManagerLayer()

  graphicLayer.bindContextMenu([
    {
      text: "删除对象",
      icon: "fa fa-trash-o",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        graphicLayer.removeGraphic(graphic)
      }
    },
    {
      text: "计算长度",
      icon: "fa fa-medium",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return (
          graphic.type === "polyline" ||
          graphic.type === "polylineP" ||
          graphic.type === "curve" ||
          graphic.type === "curveP" ||
          graphic.type === "polylineVolume" ||
          graphic.type === "polylineVolumeP" ||
          graphic.type === "corridor" ||
          graphic.type === "corridorP" ||
          graphic.type === "wall" ||
          graphic.type === "wallP"
        )
      },
      callback: function (e) {
        const graphic = e.graphic
        const strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
        $alert("该对象的长度为:" + strDis)
      }
    },
    {
      text: "计算周长",
      icon: "fa fa-medium",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return (
          graphic.type === "circle" ||
          graphic.type === "circleP" ||
          graphic.type === "rectangle" ||
          graphic.type === "rectangleP" ||
          graphic.type === "polygon" ||
          graphic.type === "polygonP"
        )
      },
      callback: function (e) {
        const graphic = e.graphic
        const strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
        $alert("该对象的周长为:" + strDis)
      }
    },
    {
      text: "计算面积",
      icon: "fa fa-reorder",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return (
          graphic.type === "circle" ||
          graphic.type === "circleP" ||
          graphic.type === "rectangle" ||
          graphic.type === "rectangleP" ||
          graphic.type === "polygon" ||
          graphic.type === "polygonP" ||
          graphic.type === "scrollWall" ||
          graphic.type === "water"
        )
      },
      callback: function (e) {
        const graphic = e.graphic
        const strArea = mars3d.MeasureUtil.formatArea(graphic.area)
        $alert("该对象的面积为:" + strArea)
      }
    }
  ])
}

function drawFile() {
  let file = this.files[0]

  let fileName = file.name
  let fileType = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase()

  if (fileType == "json" || fileType == "geojson") {
    let reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onloadend = function (e) {
      let geojson = JSON.parse(this.result)

      if (geojson.type == "graphic" && geojson.data) {
        graphicLayer.addGraphic(geojson.data)
        graphicLayer.flyTo()
      } else {
        geojson = simplifyGeoJSON(geojson) //简化geojson的点
        graphicLayer.loadGeoJSON(geojson, { flyTo: true })
      }
      clearSelectFile()
    }
  } else if (fileType == "kml") {
    let reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onloadend = function (e) {
      let strkml = this.result
      kgUtil.toGeoJSON(strkml).then((geojson) => {
        geojson = simplifyGeoJSON(geojson) //简化geojson的点
        console.log("kml2geojson", geojson)

        graphicLayer.loadGeoJSON(geojson, {
          flyTo: true
          // symbol: function (attr, style, featue) {
          //   let geoType = featue.geometry?.type
          //   if (geoType == 'Point') {
          //     return {
          //       image: 'img/marker/di3.png',
          //       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          //       scale: 0.4,
          //       label: {
          //         text: attr.name,
          //         font_size: 18,
          //         color: '#ffffff',
          //         outline: true,
          //         outlineColor: '#000000',
          //         pixelOffsetY: -50,
          //         scaleByDistance: true,
          //         scaleByDistance_far: 990000,
          //         scaleByDistance_farValue: 0.3,
          //         scaleByDistance_near: 10000,
          //         scaleByDistance_nearValue: 1,
          //       },
          //     }
          //   }
          //   return style
          // },
        })
        clearSelectFile()
      })
      clearSelectFile()
    }
  } else if (fileType == "kmz") {
    //加载input文件控件的二进制流
    kgUtil.toGeoJSON(file).then((geojson) => {
      geojson = simplifyGeoJSON(geojson) //简化geojson的点
      console.log("kmz2geojson", geojson)

      graphicLayer.loadGeoJSON(geojson, {
        flyTo: true
      })
      clearSelectFile()
    })
  } else {
    window.layer.msg("暂不支持 " + fileType + " 文件类型的数据！")
    clearSelectFile()
  }
}

function clearSelectFile() {
  if (!window.addEventListener) {
    document.getElementById("input_draw_file").outerHTML += "" //IE
  } else {
    document.getElementById("input_draw_file").value = "" //FF
  }
}

//简化geojson的坐标
function simplifyGeoJSON(geojson) {
  try {
    geojson = turf.simplify(geojson, { tolerance: 0.000001, highQuality: true, mutate: true })
  } catch (e) {
    //
  }
  return geojson
}

//也可以在单个Graphic上做个性化管理及绑定操作
function initGraphicManager(graphic) {
  //3.在graphic上绑定监听事件
  // graphic.on(mars3d.EventType.click, function(event) {
  //   console.log('监听graphic，单击了矢量对象', event)
  // })
  // graphic.on(mars3d.EventType.mouseOver, function(event) {
  //   console.log('监听graphic，鼠标移入了矢量对象', event)
  // })
  // graphic.on(mars3d.EventType.mouseOut, function(event) {
  //   console.log('监听graphic，鼠标移出了矢量对象', event)
  // })

  //绑定Tooltip
  // graphic.bindTooltip('我是graphic上绑定的Tooltip') //.openTooltip()

  //绑定Popup

  let inthtml = `<table style="width: auto;">
            <tr>
              <th scope="col" colspan="2" style="text-align:center;font-size:15px;">我是graphic上绑定的Popup </th>
            </tr>
            <tr>
              <td>提示：</td>
              <td>这只是测试信息，可以任意html</td>
            </tr>
          </table>`
  graphic.bindPopup(inthtml).openPopup()

  //绑定右键菜单
  graphic.bindContextMenu([
    {
      text: "删除对象[graphic绑定的]",
      icon: "fa fa-trash-o",
      callback: function (e) {
        let graphic = e.graphic
        if (graphic) {
          graphic.remove()
        }
      }
    }
  ])

  //测试 颜色闪烁
  if (graphic.startFlicker) {
    graphic.startFlicker({
      time: 20, //闪烁时长（秒）
      maxAlpha: 0.5,
      color: Cesium.Color.YELLOW,
      onEnd: function () {
        //结束后回调
      }
    })
  }
}
