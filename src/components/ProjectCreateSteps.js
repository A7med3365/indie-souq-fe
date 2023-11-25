import React from 'react';

export default function ProjectCreateSteps({
  selected,
  setSelected,
  complete,
}) {
  const steps = [
    'Project details',
    'Cast & crew',
    'Funding Details',
    'Budget distribution',
    'Reward system',
  ];

  const styles = {
    completed:
      'w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400',
    selected:
      'w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400',
    both: 'w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-200 dark:bg-gray-800 dark:border-green-800 dark:text-green-400',
    idle: 'w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400',
  };

  const getStyle = (isComplete, isSelected) => {
    if (isComplete && isSelected) {
      return styles.both;
    } else if (isComplete) {
      return styles.completed;
    } else if (isSelected) {
      return styles.selected;
    } else {
      return styles.idle;
    }
  };
  return (
    <div className="mx-auto">
      <ol className="space-y-4 w-72">
        {steps.map((step, i) => {
          return (
            <li
              className="cursor-pointer"
              key={i}
              onClick={() => {
                setSelected(i);
              }}
            >
              <div
                className={getStyle(complete[i], i === selected)}
                role="alert"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{step}</h3>
                  <GetIcon
                    isComplete={complete[i]}
                    isSelected={i === selected}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function GetIcon({ isComplete, isSelected }) {
  if (isComplete) {
    return <CompleteIcon />;
  }
  if (isSelected) {
    return <SelectedIcon />;
  }
}

function CompleteIcon() {
  return (
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );
}

function SelectedIcon() {
  return (
    <svg
      className="rtl:rotate-180 w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  );
}
