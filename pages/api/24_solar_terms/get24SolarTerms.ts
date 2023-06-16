// http://localhost:3000/api/24_solar_terms/get24SolarTerms?monthDate=02-03

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const reqMonthDate = new Date(req.query.monthDate as string);
  const springs = ['立春', '雨水', '啓蟄', '春分', '清明', '穀雨'];
  const summers = ['立夏', '小満', '芒種', '夏至', '小暑', '大暑'];
  const autumns = ['立秋', '処暑', '白露', '秋分', '寒露', '霜降'];
  const winters = ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'];

  let solarTerm = '';

  if (new Date('01-21') < reqMonthDate && reqMonthDate < new Date('02-04')) {
    solarTerm = springs[0];
  } else if (new Date('02-04') <= reqMonthDate && reqMonthDate < new Date('02-19')) {
    solarTerm = springs[1];
  } else if (new Date('02-19') <= reqMonthDate && reqMonthDate < new Date('03-05')) {
    solarTerm = springs[2];
  } else if (new Date('03-05') <= reqMonthDate && reqMonthDate < new Date('03-21')) {
    solarTerm = springs[3];
  } else if (new Date('03-21') <= reqMonthDate && reqMonthDate < new Date('04-05')) {
    solarTerm = springs[4];
  } else if (new Date('04-05') <= reqMonthDate && reqMonthDate < new Date('04-20')) {
    solarTerm = springs[5];
  } else if (new Date('04-20') <= reqMonthDate && reqMonthDate < new Date('05-05')) {
    solarTerm = summers[9];
  } else if (new Date('05-05') <= reqMonthDate && reqMonthDate < new Date('05-21')) {
    solarTerm = summers[1];
  } else if (new Date('05-21') <= reqMonthDate && reqMonthDate < new Date('06-06')) {
    solarTerm = summers[2];
  } else if (new Date('06-06') <= reqMonthDate && reqMonthDate < new Date('06-21')) {
    solarTerm = summers[3];
  } else if (new Date('06-21') <= reqMonthDate && reqMonthDate < new Date('07-07')) {
    solarTerm = summers[4];
  } else if (new Date('07-07') <= reqMonthDate && reqMonthDate < new Date('07-23')) {
    solarTerm = summers[5];
  } else if (new Date('07-23') <= reqMonthDate && reqMonthDate < new Date('08-08')) {
    solarTerm = autumns[0];
  } else if (new Date('08-08') <= reqMonthDate && reqMonthDate < new Date('08-23')) {
    solarTerm = autumns[1];
  } else if (new Date('08-23') <= reqMonthDate && reqMonthDate < new Date('09-08')) {
    solarTerm = autumns[2];
  } else if (new Date('09-08') <= reqMonthDate && reqMonthDate < new Date('09-23')) {
    solarTerm = autumns[3];
  } else if (new Date('09-23') <= reqMonthDate && reqMonthDate < new Date('10-08')) {
    solarTerm = autumns[4];
  } else if (new Date('10-08') <= reqMonthDate && reqMonthDate < new Date('10-24')) {
    solarTerm = autumns[5];
  } else if (new Date('10-24') <= reqMonthDate && reqMonthDate < new Date('11-07')) {
    solarTerm = winters[0];
  } else if (new Date('11-07') <= reqMonthDate && reqMonthDate < new Date('11-22')) {
    solarTerm = winters[1];
  } else if (new Date('11-22') <= reqMonthDate && reqMonthDate < new Date('12-07')) {
    solarTerm = winters[2];
  } else if (new Date('12-07') <= reqMonthDate && reqMonthDate < new Date('12-21')) {
    solarTerm = winters[3];
  } else if (new Date('12-21') <= reqMonthDate && reqMonthDate < new Date('01-05')) {
    solarTerm = winters[4];
  } else if (new Date('01-05') <= reqMonthDate && reqMonthDate < new Date('01-21')) {
    solarTerm = winters[5];
  } else {
    solarTerm = 'error';
  }

  res.status(200).json({ solarTerm: solarTerm });
}
