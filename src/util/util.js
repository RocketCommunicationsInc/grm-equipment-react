export function randInt(max, min = 0) {
  return Math.floor(Math.random() * max) + min;
}

export function loremIpsum() {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis dolor efficitur nisl sagittis, rutrum ornare mauris consectetur. Nunc at sem quam. Etiam dolor mauris, dictum sed condimentum sit amet, interdum eget dolor. Nullam quis fringilla ex, non scelerisque mauris. Phasellus aliquam ligula sapien, et vulputate lorem mollis vitae.';
}

export function formatReadableTime(timestamp) {
  // assumes timestamp is a UTC Epoch
  const time = new Date(timestamp);

  return new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
}

export function formatDayOfYear(timestamp) {
  const time = new Date(timestamp);

  function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
      return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ''; // always return a string
  }

  const doy =
    (Date.UTC(time.getFullYear(), time.getMonth(), time.getDate()) -
      Date.UTC(time.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000;
  return zeroFill(doy, 3);
}

export function formatYear(timestamp) {
  const time = new Date(timestamp);
  return time.getUTCFullYear();
}

export function capitalize(val) {
  if (!val) return;
  return val.charAt(0).toUpperCase() + val.substring(1);
}

export function mapJobType(jobType) {
  switch (jobType) {
    case 1:
      return 'PMR 1';
    case 2:
      return 'PMR 2';
    case 3:
      return 'PMR 3';
    case 4:
      return 'PMR 4';
    case 5:
      return 'PMR 5';
    default:
      return 'Job Type not provided';
  }
}

export function mapJobProgress(jobProgress) {
  switch (jobProgress) {
    case 2:
      return 'Approved';
    case 3:
      return 'Started';
    case 4:
      return 'Stopped';
    case 5:
      return 'Online';
    default:
      return 'Submitted'; // also 1
  }
}
