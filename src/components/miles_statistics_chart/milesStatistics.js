import React,{useEffect} from "react";
import MilesStatisticsStyles from "./milesStatistics.module.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
const MilesStatistics = ()=>{
    useEffect(() => {
        let root = am5.Root.new("chartdiv");
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX:true,
              
          }));
        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
          rotation: -90,
          centerY: am5.p50,
          centerX: am5.p100,
          paddingRight: 15,
      
        });
        let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "times",
          renderer: xRenderer,
         // maxWidth:150,
        }));
       // xAxis.renderer.labels.template.fontFamily = "";
       var myTheme = am5.Theme.new(root);
      
       myTheme.rule("Label").setAll({
         fill: am5.color(0x808191),
         fontSize: "14px",
        fontFamily:'DM Sans'
       });
       
       root.setThemes([
         am5themes_Animated.new(root),
         myTheme
       ]);
        var yRenderer = am5xy.AxisRendererY.new(root, {})
        yRenderer.labels.template.set('visible', false)
        
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          renderer: yRenderer
        }));
        
        
        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          sequencedInterpolation: true,
          categoryXField: "times",
          tooltip: am5.Tooltip.new(root, {  
            labelText:"{valueY}K",
            keepTargetHover:true,
           // getFillFromSprite:false,
          
           // 
        
          }),

        }));
        series.columns.template.setAll({
            width: 30,
            fillOpacity: 0.5,
          });
          

          yAxis.get("renderer").grid.template.setAll({
            strokeWidth: 0,
            visible:false
          });
        series.columns.template.setAll({ cornerRadiusTL: 0, cornerRadiusTR: 0 });
        series.columns.template.adapters.add("fill", function(fill, target) {
         // return chart.get("colors").getIndex(series.columns.indexOf(target));
         return target.dataItem.dataContext["color"];
        });
        series.columns.template.adapters.add("stroke", function(stroke, target) {
         // return chart.get("colors").getIndex(series.columns.indexOf(target));
         return target.dataItem.dataContext["color"];
        });
        let data = [{
          times: "1PM",
          value:  90,
          color:'#F4F5F9',
          
        }, {
          times: "2PM",
          value: 80,
          color:'#F4F5F9'
        }, {
          times: "3PM",
          value: 157,
          color:'#2884FF'
        }, {
          times: "4PM",
          value: 30,
          color:'#F4F5F9'
        }, {
          times: "5PM",
          value: 50,
          color:'#F4F5F9'
        }, {
          times: "6PM",
          value: 20,
          color:'#F4F5F9'
        }, {
          times: "7PM",
          value: 55,
          color:'#F4F5F9'
        }];
        xAxis.data.setAll(data);
        series.data.setAll(data);
        series.appear(1000);
        chart.appear(1000, 100);
        root._logo.dispose();
        return () => {
          root.dispose();
        };
        
      }, []);
    return(
        <div className={MilesStatisticsStyles.milesChart}>
            <div className={MilesStatisticsStyles.milesChartWithDetails}>
                <span>miles Statistics</span>
                <div>
                    <section>
                     <ul>
                            <li>Day</li>
                            <li>Week</li>
                            <li>Month</li>
                        </ul>
                    </section>
                    <section>
                        <span>256 Miles</span>
                    </section>
                </div>
            <div id="chartdiv" style={{width:'100%',height:'100%'}}>
            </div>
            </div>
  </div>

    )
}
export default MilesStatistics;