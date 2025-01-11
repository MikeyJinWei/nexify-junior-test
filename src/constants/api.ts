/**
 * Swagger URL
 * http://nexifytw.mynetgear.com/front-end/
 * http://nexifytw.mynetgear.com:45000/swagger/index.html
 */

const BASE_URL = import.meta.env.BASE_URL;
export const GET_RECORDS_URL = `${BASE_URL}/api/Reecord/GetRecords`;
export const SAVE_RECORDS_URL = `${BASE_URL}/api/Record/SaveRecords`;
