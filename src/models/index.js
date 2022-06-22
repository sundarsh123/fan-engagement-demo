// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, StarredEvent } = initSchema(schema);

export {
  Event,
  StarredEvent
};