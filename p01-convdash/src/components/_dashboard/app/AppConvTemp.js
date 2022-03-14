import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Полезная руда',
    type: 'area',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 58]
  },

  {
    name: 'Общий объем',
    type: 'area',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 60]
  }
];

export default function AppConvLoad() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [3, 3] },
    plotOptions: { bar: { columnWidth: '30%', borderRadius: 3 } },
    fill: { type: ['gradient', 'gradient'] },
    colors: ['gray', '#2a6079'],
    labels: [
      '-24 ч',
      '-22 ч',
      '-20 ч',
      '-18 ч',
      '-16 ч',
      '-14 ч',
      '-12 ч',
      '-10 ч',
      '-8 ч',
      '-6 ч',
      '-4 ч',
      'текущая'
    ],
    xaxis: { type: 'text' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} тонн`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Перевезено конвейерами руды, тонн" subheader="" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
