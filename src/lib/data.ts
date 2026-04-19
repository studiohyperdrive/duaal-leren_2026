// TODO: add types — tightening these is a day-1 workshop exercise.
import pickupsRaw from '../../data/pickups.json';
import recyclageparkenRaw from '../../data/recyclageparken.json';
import tipsRaw from '../../data/tips.json';
import weatherRaw from '../../data/weather.json';

const addDays = (offset: number): string => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

const addHours = (offset: number): string => {
  const d = new Date();
  d.setHours(d.getHours() + offset);
  return d.toISOString();
};

export const pickups = pickupsRaw.map((p) => ({
  ...p,
  date: addDays(p.dayOffset),
}));

export const weather = {
  ...weatherRaw,
  fetchedAt: new Date().toISOString(),
  hourly: weatherRaw.hourly.map((h) => ({
    ...h,
    time: addHours(h.hourOffset),
  })),
  daily: weatherRaw.daily.map((d) => ({
    ...d,
    date: addDays(d.dayOffset),
  })),
};

export const recyclageparken = recyclageparkenRaw;
export const tips = tipsRaw;
