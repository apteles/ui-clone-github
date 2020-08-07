import React from 'react';
import {subYears,isBefore, isSameDay, addDays} from 'date-fns'
import Heatmap from 'react-calendar-heatmap'
import { Container } from './styles';

type HeatmapValue = {
  date: Date,
  count: number
}

const classForValueFN = (item: HeatmapValue) => {
  let clampedCount = 0;

  if(item !== null){
    clampedCount = Math.max(item.count,0)
    clampedCount = Math.min(item.count,4)
  }

  return `scale-${clampedCount}`
}
const randomUntil = (value: number) => Math.round(Math.random() * value)

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = randomUntil(4);

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

const RandomCalendar: React.FC = () => {
  const values:HeatmapValue[] = [{date: new Date(), count: 3}]
  const startDate = subYears(new Date(), 1)
  const endDate = new Date()

  values.push({date: new Date(), count: 3})

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={classForValueFN}
          showWeekdayLabels
        />
      </div>
      <span>Calendário Randômico (Dados Fake)</span>
    </Container>
  );
}

export default RandomCalendar;