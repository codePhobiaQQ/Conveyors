import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';
import React, {useState, useEffect} from 'react';
import axios from "axios";
// ----------------------------------------------------------------------
export default function AppConvHoursProjected() {
  const [categories, setCategories] = useState([]);
  const [conv_workhours, setConv_workhours] = useState([]);

  useEffect(() => {
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:3001/categories");
    const categoriesNames = response.data.map(category => {
      return category.full_name;
    })
    setCategories(categoriesNames);
  }
  fetchCategories();

  const fetchHours = async () => {
    const response2 = await axios.get("http://localhost:3001/convhours");
    const conv_workhoursCount = response2.data.map(conv_workhours => {
      return conv_workhours.value;
    })
    setConv_workhours(conv_workhoursCount);
  }
  fetchHours();
  }, [])

const CHART_DATA = [
  {
    name: 'Под нагрузкой',
    type: 'bar',
    data: conv_workhours
  },

  // {
  //   name: 'Холостой ход',
  //   type: 'bar',
  //   // data: [2, 1, 1, 1, 5, 3, 2]
  // }
];


  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [1, 1] },
    plotOptions: { bar: { columnWidth: '50%', borderRadius: 2 , horizontal: false} },
    fill: { type: ['solid', 'solid'] },
    colors: ['#2a6079', 'gray'],
    labels: categories,

    xaxis: { type: 'text' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} часов`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Нагрузка конвейеров, часы" subheader="" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            {conv_workhours.length !==0 &&
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      }
      </Box>
    </Card>
  );
}
