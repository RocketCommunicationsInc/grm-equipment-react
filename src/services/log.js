import { randInt } from '../util/util';

const logStatuses = [
  'off',
  'standby',
  'normal',
  'caution',
  'serious',
  'critical',
];

const logMessages = [
  'Architecto temporibus iusto dolor quisquam',
  'Reiciendis similique earum qui quas corporis error et',
  'Necessitatibus magni corporis est nam asperiores est',
  'occaecati laudantium beatae',
  'Architecto et quasi. Rerum et quod iste eum aperiam voluptates vel. Blanditiis enim deserunt',
  'Dolorum expedita assumenda quia nihil omnis. Velit omnis fugit dolore laudantium quam dolor tempora asperiores corporis. Cupiditate quia ipsum',
];

function getLogStatus() {
  return logStatuses[Math.floor(Math.random() * logStatuses.length)];
}

export function getAll() {
  return {
    commsStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(50),
    },
    digitalStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(50),
    },
    facilitiesStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(50),
    },
    rfStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(50),
    },
    softwareStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(50),
    },
    ucaStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(50),
    },
    timestamp: Date.now(),
  };
}

export function getOne() {
  return {
    timestamp: new Date(),
    status: getLogStatus(),
    entry: logMessages[Math.floor(Math.random() * logMessages.length)],
  };
}

export function populateLog() {
  let logs = [];

  for (let i = 0; i < 10; i++) {
    logs.push({
      timestamp: new Date(),
      status: getLogStatus(),
      message: logMessages[Math.floor(Math.random() * logMessages.length)],
    });
  }

  return logs;
}
