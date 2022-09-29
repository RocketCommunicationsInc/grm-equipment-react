import { randInt } from '../util/util';

const logStatuses = [
  'off',
  'standby',
  'normal',
  'caution',
  'serious',
  'critical',
];

function getLogStatus() {
  return logStatuses[Math.floor(Math.random() * logStatuses.length)];
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
    message: logMessages[Math.floor(Math.random() * logMessages.length)],
  };
}

export const eventLog = [];
for (let i = 0; i < randInt(1, 2); i++) {
  eventLog.push(getOne());
}
