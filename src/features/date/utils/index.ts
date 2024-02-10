import lodash from 'lodash';
import dayjs, { Dayjs } from 'dayjs';
import { DATE_FORMAT } from '@/features/date/constants';

export const toDateYearString = (date: string | Dayjs) => lodash.isNil(date) ? null : dayjs(date).format(DATE_FORMAT.YEAR);

export const toDateString = (date: string | Dayjs) => lodash.isNil(date) ? null : dayjs(date).format(DATE_FORMAT.DATE);

export const toDatetimeString = (date: string | Dayjs) => lodash.isNil(date) ? null : dayjs(date).format(DATE_FORMAT.DATETIME);