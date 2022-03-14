// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppConvStops,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  AppConvLoad,
  AppConvPie,
  AppOverallMined,
  AppConvHours,
  AppConvTemp,
  AppConvStopsPie,
  AppConvHoursProjected
} from '../components/_dashboard/app';
import { AppErrors } from '../components/_dashboard/app';
// import newConf from '../pages/conf/newConf';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Мониторинг системы">
      <Container maxWidth="disabled">
        <Box sx={{ pb: 2 }}>
          <Typography variant="h4">Мониторинг системы конвейеров, 24 часа</Typography>
        </Box>
        <Grid container spacing={1}>
        <Grid item xs={6} md={6} lg={6}>
          <AppConvHoursProjected />
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <AppConvTemp />
        </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppOverallMined />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppConvStops />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
                      <AppErrors />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
