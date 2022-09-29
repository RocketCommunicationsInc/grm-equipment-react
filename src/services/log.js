import { randInt } from '../util/util';

const logStatuses = [
  'off',
  'standby',
  'normal',
  'caution',
  'serious',
  'critical',
];

export function getLogStatus() {
  return logStatuses[Math.floor(Math.random() * logStatuses.length)];
}

export function getAll() {
  return {
    commsStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(1, 50),
    },
    digitalStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(1, 50),
    },
    facilitiesStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(1, 50),
    },
    rfStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(1, 50),
    },
    softwareStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(1, 50),
    },
    ucaStatus: {
      worstStatus: getLogStatus(),
      numMessages: randInt(1, 50),
    },
    timestamp: Date.now(),
  };
}

export function getOne() {
  const logMessages = [
    'Architecto temporibus iusto dolor quisquam',
    'Reiciendis similique earum qui quas corporis error et',
    'Necessitatibus magni corporis est nam asperiores est',
    'occaecati laudantium beatae',
    'Architecto et quasi. Rerum et quod iste eum aperiam voluptates vel. Blanditiis enim deserunt',
    'Dolorum expedita assumenda quia nihil omnis. Velit omnis fugit dolore laudantium quam dolor tempora asperiores corporis. Cupiditate quia ipsum',
  ];

  return {
    timestamp: new Date(),
    status: getLogStatus(),
    entry: logMessages[Math.floor(Math.random() * logMessages.length)],
  };
}
