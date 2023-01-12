import React, { useEffect } from "react";
import CarStatisticsStyles from "./carStatistics.module.css";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
const CarStatistics = () => {
    useEffect(() => {
        // Create root and chart
        var root = am5.Root.new("chartdivx");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panY: false,
                wheelY: "zoomX",
                layout: root.verticalLayout
            })
        );

        // Define data
        var data = [{
            category: "7am",
            value1: 350,
        }, {
            category: "9am",
            value1: 100,
        }, {
            category: "11am",
            value1: 600,
        }, {
            category: "1am",
            value1: 200,
        }
        ];

        // Craete Y-axis
        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                visible: false,
                renderer: am5xy.AxisRendererY.new(root, {
                })
            })
        );

        // Create X-Axis
        var xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.2,
                renderer: am5xy.AxisRendererX.new(root, {
                }),
                categoryField: "category"
            })
        );
        xAxis.data.setAll(data);

        // Create series
        var series1 = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value1",
                categoryXField: "category",
                fill: am5.color(0xff621f),
            })
        );
        series1.data.setAll(data);
        series1.fills.template.setAll({
            visible: true,
            fillOpacity: 1,
            fillGradient: am5.LinearGradient.new(root, {
              stops: [{
                color: am5.color("rgba(255, 118, 76, 0.24)")
              }, {
                color: am5.color("rgba(255, 126, 7, 0)")
              }],
              //target: chart.plotContainer,
              rotation: 90
            })
          });

        series1.strokes.template.setAll({
            strokeWidth: 2
        });
        yAxis.get("renderer").grid.template.setAll({
            strokeWidth: 0,
            visible: false
        });
        xAxis.get("renderer").grid.template.setAll({
            strokeWidth: 0,
            visible: false,

        });
        root._logo.dispose();
        return () => {
            root.dispose();
        };
    }, []);
    return (
        <div className={CarStatisticsStyles.carStatistics}>
            <div className={CarStatisticsStyles.carStatisticsWithDetails}>
                <span>Car Statistics</span>
                <div>
                    <section>
                        <span>20 February 2022</span>
                    </section>
                    <section>
                        <ul>
                            <li>Day</li>
                            <li>Week</li>
                            <li>Month</li>
                        </ul>
                    </section>
                </div>
                <div id="chartdivx" style={{ width: '100%', height: '100%' }}>
                </div>
            </div>
        </div>
    )
}
export default CarStatistics;