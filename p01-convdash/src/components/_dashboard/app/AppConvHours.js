import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

import React, {useState, useEffect} from 'react';
import axios from "axios";

// ----------------------------------------------------------------------

export default function AppConvHours() {
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

    // const fetchHours00 = async () => {
    //   const response2 = await axios.get("http://localhost:3001/convhours_00");
    //   const conv_workhoursCount = response2.data.map(conv_workhours => {
    //     return conv_workhours.value;
    //   })
    //   setConv_workhours(conv_workhoursCount);
    // }
    // fetchHours00();
    //
    // const fetchHours01 = async () => {
    //   const response2 = await axios.get("http://localhost:3001/convhours_01");
    //   const conv_workhoursCount = response2.data.map(conv_workhours => {
    //     return conv_workhours.value;
    //   })
    //   setConv_workhours(conv_workhoursCount);
    // }
    // fetchHours01();
  }, [])



  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}:`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '50%', borderRadius: 2 }
    },
    xaxis: {
      categories
    }

  });

const CHART_DATA = [{ data: conv_workhours }];

  return (
    <Card>
      <CardHeader title="Моточасы конвейера" subheader="" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={384} />
      </Box>
    </Card>
  );
}
