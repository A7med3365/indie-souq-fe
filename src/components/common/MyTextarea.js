import React from 'react';

export default function MyTextarea({
  className,
  styles = {
    input:
      'w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500',
    label: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
  },
  id,
  label = 'Text area',
  placeholder = 'Write your thoughts here...',
  rows = 6,
  value,
  onChange = (e) => {
    console.log(e.target.value);
  },
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        class={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
