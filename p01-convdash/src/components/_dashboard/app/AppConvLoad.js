import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'K490',
    type: 'line',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 58]
  },
  {
    name: 'K601',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 14]
  },
  {
    name: 'K621',
    type: 'line',
    data: [48, 41, 52, 80, 15, 15, 10, 5, 74, 21, 47, 11]
  },
  {
    name: 'K477',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 55]
  }
];

export default function AppConvLoad() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2, 2, 2, 2] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 3 } },
    fill: { type: ['solid', 'solid', 'solid', 'solid'] },
    labels: [
      '01/01/2021',
      '02/01/2021',
      '03/01/2021',
      '04/01/2021',
      '05/01/2021',
      '06/01/2021',
      '07/01/2021',
      '08/01/2021',
      '09/01/2021',
      '10/01/2021',
      '11/01/2021',
      '12/01/2021'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} кВт`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Загрузка конвейеров, кВт" subheader="за последние 7 суток" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
