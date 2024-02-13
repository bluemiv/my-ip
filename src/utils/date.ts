import lodash from 'lodash';
import dayjs, { Dayjs } from 'dayjs';
import { DATE_FORMAT } from '@/constants';

export const toDateYearString = (date: string | Dayjs) =>
  lodash.isNil(date) ? null : dayjs(date).format(DATE_FORMAT.YEAR);
