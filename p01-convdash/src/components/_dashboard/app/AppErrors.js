import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

import React, { useState, useEffect } from 'react';
import axios from "axios";


// ----------------------------------------------------------------------
function msToTime(milliseconds) {//милисекунды до часов:минут:секунд
    var hours = milliseconds / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;


    return h + ':' + m + ':' + s;
}
const chartData = [//затычка
          {
            data: [
              {
                x: '1',//группа ошибки
                y: [//
                  new Date('2021-03-02 23:43:30').getTime(),
                  new Date('2021-03-03 01:00:00').getTime()
                    ],
                errorList: "ошибка 1"//Список ошибок
                //convNumber: "1"//Номер конвейера
                  },
              {
                x: '1',
                y: [
                  new Date('2021-03-03 00:37:30').getTime(),
                  new Date('2021-03-03 00:45:17').getTime()
                   ],
                  errorList: "ошибка 35"
              },
              {
                x: '2',
                y: [
                  new Date('2021-03-02 23:08:30').getTime(),
                  new Date('2021-03-02 23:43:30').getTime()
                  ],
                  errorList: "ошибка 2"
              },
              {
                x: '3',
                y: [
                    new Date('2021-03-02 23:20:30').getTime(),
                    new Date('2021-03-02 23:30:30').getTime()
                  ],
                  errorList: "ошибка 5"
              },
              {
                x: '10',
                y: [
                    new Date('2021-03-02 23:10:30').getTime(),
                    new Date('2021-03-02 23:40:30').getTime()
                  ],
                  errorList: ["ошибка 9", "ошибка 12", "ошибка 12", "ошибка 12"]
              }
            ]
          }
        ];

export default function AppErrors(/*appnewconf*/) {
    const chartOptions = merge(BaseOptionChart(), {
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 0,
                rangeBarOverlap:false
            }
        },
        tooltip: {
                
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul style="font-family: Public Sans, sans-serif; font-size: 12px; padding-left:20px; padding-right:15px; margin-bottom:5px; margin-top:3px;">' +
                        '<li >Конвейер №' + data.x + '</li>' +
                        '<li>Продолжительность: ' + msToTime(data.y[1] - data.y[0]) + '</li>' +
                        '<li>Ошибка №: ' + data.errorList + '</li>' +
                        '</ul>';
                }

            
        },
        xaxis: {
            type: 'datetime'
        },
        
    
        //chart: {
        //    zoom: {
        //        enabled: true,
        //    },
            
        //    toolbar: { 
        //        show: true,
        //        offsetX: 0,
        //        offsetY: 0,
        //        tools: {
        //            download: true,
        //            selection: true,
        //            zoom: true,
        //            zoomin: true,
        //            zoomout: true,
        //            pan: true,
        //            reset: true,
        //            customIcons: []
        //        },
        //        export: {
        //            csv: {
        //                filename: undefined,
        //                columnDelimiter: ',',
        //                headerCategory: 'category',
        //                headerValue: 'value',
        //                dateFormatter(timestamp) {
        //                    return new Date(timestamp).toDateString()
        //                }
        //            },
        //            svg: {
        //                filename: undefined,
        //            },
        //            png: {
        //                filename: undefined,
        //            }
        //        },
        //        autoSelected: 'zoom'
        //    }
        //}
    });
       

    return (
        <Card>
            <CardHeader title="Ошибки" subheader="" />
            <Box sx={{ mx: 3 }} dir="ltr">
                <ReactApexChart type="rangeBar" series={chartData} options={chartOptions} height={384} />
            </Box>
        </Card>
    );
}