import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 1600] }];

export default function AppConvStopsBarChart() {
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
      bar: { horizontal: true, barHeight: '28%', borderRadius: 1 }
    },
    xaxis: {
      categories: [
        '01 - Авария линии безопасности',
        '02 - Аварийная кнопка',
        '03 - Сработка  КТВ',
        'K874',
        'K998',
        'K524',
        'K784',
        'K982',
        'K125',
        'K078',
        'K084'
      ]
    }
  });

  return (
    <Card>
      <CardHeader title="Статистика остановок конвейера" subheader="Причины и количество" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={374} />
      </Box>
    </Card>
  );
}
