/* eslint-disable consistent-return */
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function changeDate(dateTime) {
  if (dateTime) {
    return format(dateTime, 'd MMMM', { locale: ru });
  }
}

export default changeDate;
