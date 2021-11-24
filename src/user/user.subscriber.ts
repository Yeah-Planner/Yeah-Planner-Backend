import { User } from 'src/entities/user.entity';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log('User Created: ' + event.entity.uuid);
  }

  beforeUpdate(event: UpdateEvent<User>) {
    console.log('User Updated: ' + event.entity.uuid);
  }

  beforeRemove(event: RemoveEvent<User>) {
    console.log('User Removed: ' + event.entity.uuid);
  }
}
