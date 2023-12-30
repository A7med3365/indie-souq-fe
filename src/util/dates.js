export function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function createDateFromString(dateString) {
  if (!dateString || dateString.length === 0) return null;
  const [day, month, year] = dateString.split('-');
  return new Date(year, month - 1, day);
}

export function dateStrFormat(dateString) {
  // Parse the date
  const [day, month, year] = dateString.split('-');

  // JavaScript's Date months are 0-indexed, so subtract 1 from the month
  const date = new Date(year, month - 1, day);

  // Format the date
  return date.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}