'use client';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useTranslate } from 'src/locales';
import { MotivationIllustration } from 'src/assets/illustrations';
import {
  _ecommerceNewProducts,
  _ecommerceBestSalesman,
  _ecommerceSalesOverview,
  _ecommerceLatestProducts,
} from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import StatisticWelcome from '../statistic-welcome';
import StatisticNewProducts from '../statistic-new-products';
import StatisticYearlySales from '../statistic-yearly-sales';
import StatisticBestSalesman from '../statistic-best-salesman';
import StatisticSaleByGender from '../statistic-sale-by-gender';
import StatisticWidgetSummary from '../statistic-widget-summary';
import StatisticSalesOverview from '../statistic-sales-overview';
import StatisticLatestProducts from '../statistic-latest-products';

// ----------------------------------------------------------------------

export default function OverviewStatisticView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const { t } = useTranslate();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <StatisticWelcome
            title="Học viên đào tạo"
            description="Số lượng nhân viên đã hoàn thành khóa học tháng hơn 10% so với tháng trước"
            img={<MotivationIllustration />}
            action={
              <Button variant="contained" color="primary">
                Go Now
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <StatisticNewProducts list={_ecommerceNewProducts} />
        </Grid>

        <Grid xs={12} md={4}>
          <StatisticWidgetSummary
            title="Total Employees"
            percent={2.6}
            total={90}
            chart={{
              series: [22, 8, 35, 50, 82, 84, 77, 12, 87, 43],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <StatisticWidgetSummary
            title="Total employees learning the course"
            percent={-0.1}
            total={90}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [56, 47, 40, 62, 73, 30, 23, 54, 67, 68],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <StatisticWidgetSummary
            title="Total employees completed the course"
            percent={0.6}
            total={50}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [40, 70, 75, 70, 50, 28, 7, 64, 38, 27],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <StatisticSaleByGender
            title={t('Total Courses')}
            total={40}
            chart={{
              series: [
                { label: t('Employees'), value: 55 },
                { label: t('Customers'), value: 17 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <StatisticYearlySales
            title="Yearly Sales"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Total Income',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'Total Expenses',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Total Income',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'Total Expenses',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Box width={1}>
          <StatisticSalesOverview title="Sales Overview" data={_ecommerceSalesOverview} />
        </Box>

        <Grid xs={12} md={6} lg={8}>
          <StatisticBestSalesman
            title={t('Learning achievement')}
            tableData={_ecommerceBestSalesman}
            tableLabels={[
              { id: 'participant', label: 'Participant' },
              { id: 'score', label: 'Score' },
              { id: 'rank', label: 'Rank', align: 'right' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <StatisticLatestProducts title={t('New Course')} list={_ecommerceLatestProducts} />
        </Grid>
      </Grid>
    </Container>
  );
}
