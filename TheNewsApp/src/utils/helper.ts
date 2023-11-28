import moment from 'moment';

export function formatDate(date:string | undefined) {
    return moment(date).format('DD MMM YYYY hh:mm A');
}