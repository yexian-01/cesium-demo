/* eslint-disable no-undef */
"use script" //开发环境建议开启严格模式

$(document).ready(function () {
  let inhtml = `
      <div class="infoview rightbottom" style="min-width: 200px">
      <table class="mp_table">
        <tr>
          <td class="nametd">总长度</td>
          <td id="td_alllength"></td>
        </tr>
        <tr>
          <td class="nametd">已漫游长度</td>
          <td id="td_length"></td>
        </tr>
        <tr>
          <td class="nametd">总时长</td>
          <td id="td_alltimes"></td>
        </tr>
        <tr>
          <td class="nametd">已漫游时间</td>
          <td id="td_times"></td>
        </tr>

        <tr>
          <td class="nametd">经度</td>
          <td id="td_jd"></td>
        </tr>
        <tr>
          <td class="nametd">经度</td>
          <td id="td_wd"></td>
        </tr>
        <tr>
          <td class="nametd">漫游高程</td>
          <td id="td_gd"></td>
        </tr>

        <tr>
          <td colspan="2" style="width: 100%; text-align: center">
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
            </div>
          </td>
        </tr>
      </table>
    </div> `
  $("body").append(inhtml)
})

//面板显示相关信息
eventTarget.on("roamLineChange", (roamLineData) => {
  //显示基本信息，名称、总长、总时间
  let val = Math.ceil((roamLineData.second * 100) / roamLineData.second_all)
  if (val < 1) {
    val = 1
  }
  if (val > 100) {
    val = 100
  }

  $("#td_alltimes").html(mars3d.Util.formatTime(roamLineData.second_all))
  $("#td_alllength").html(mars3d.MeasureUtil.formatDistance(roamLineData.distance_all))

  $(".progress-bar")
    .css("width", val + "%")
    .attr("aria-valuenow", val)
    .html(val + "%")

  $("#td_jd").html(roamLineData.point?.lng)
  $("#td_wd").html(roamLineData.point?.lat)
  $("#td_gd").html(mars3d.MeasureUtil.formatDistance(roamLineData.point?.alt))

  $("#td_times").html(mars3d.Util.formatTime(roamLineData.second))
  $("#td_length").html(mars3d.MeasureUtil.formatDistance(roamLineData.distance) || "0米")
})
