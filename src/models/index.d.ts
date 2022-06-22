import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StarredEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Event {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly heart?: number | null;
  readonly thumbsup?: number | null;
  readonly happy?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class StarredEvent {
  readonly id: string;
  readonly owner?: string | null;
  readonly Event?: Event | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StarredEvent, StarredEventMetaData>);
  static copyOf(source: StarredEvent, mutator: (draft: MutableModel<StarredEvent, StarredEventMetaData>) => MutableModel<StarredEvent, StarredEventMetaData> | void): StarredEvent;
}