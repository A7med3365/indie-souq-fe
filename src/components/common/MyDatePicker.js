import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { DayPicker } from 'react-day-picker';

export default function MyDatePicker({
  className,
  id,
  selected,
  onSelect,
  disabledDays,
  value,
  label = 'Date picker',
  mode = 'single',
  placeholder = 'dd-mm-yyyy',
  popupPlacement = 'bottom',
  styles = {
    input: 'w-full text-left p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500',
    label: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
  },
  captionLayout = 'buttons',
  fromYear, 
  toYear,
}) {
    // disable the past dates by default
    if (!disabledDays) {
      disabledDays = [{ from: new Date(2000, 1, 1), to: new Date() }];
    }
    const currentYear = new Date().getFullYear();
    if (!fromYear) fromYear = currentYear;

  return (
    <div className={className}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <Popover placement={popupPlacement} showArrow={true}>
        <PopoverTrigger>
          <input
            type="text"
            id={id}
            placeholder={placeholder}
            value={value}
            className={styles.input}
          />
        </PopoverTrigger>
        <PopoverContent>
          <DayPicker
            mode={mode}
            selected={selected}
            onSelect={onSelect}
            disabled={disabledDays}
            showOutsideDays
            fixedWeeks
            captionLayout={captionLayout}
            fromYear={fromYear}
            toYear={toYear}
            // styles={{  }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
