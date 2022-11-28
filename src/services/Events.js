import { randInt } from '../util/util';
import { Service } from './Service';
export class EventsService extends Service {
  blueprints = [{}];
  constructor() {
    super();
    super.childClass = EventsService;
    this.generateItems(randInt(0, 1));
  }

  generateItem() {
    const logMessages = [
      'Architecto temporibus iusto dolor quisquam',
      'Reiciendis similique earum qui quas corporis error et',
      'Necessitatibus magni corporis est nam asperiores est',
      'occaecati laudantium beatae',
      'Architecto et quasi. Rerum et quod iste eum aperiam voluptates vel. Blanditiis enim deserunt',
      'Dolorum expedita assumenda quia nihil omnis. Velit omnis fugit dolore laudantium quam dolor tempora asperiores corporis. Cupiditate quia ipsum',
    ];

    const logStatuses = [
      'off',
      'standby',
      'normal',
      'caution',
      'serious',
      'critical',
    ];

    const item = {
      timestamp: new Date(),
      status: logStatuses[Math.floor(Math.random() * logStatuses.length)],
      message: logMessages[Math.floor(Math.random() * logMessages.length)],
    };
    this.data.push(item);

    return item;
  }
}
