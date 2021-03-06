/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null,
  title: string,
  date: string,
  description: string,
  heart?: number | null,
  thumbsup?: number | null,
  happy?: number | null,
  _version?: number | null,
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heart?: ModelIntInput | null,
  thumbsup?: ModelIntInput | null,
  happy?: ModelIntInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  title: string,
  date: string,
  description: string,
  heart?: number | null,
  thumbsup?: number | null,
  happy?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEventInput = {
  id: string,
  title?: string | null,
  date?: string | null,
  description?: string | null,
  heart?: number | null,
  thumbsup?: number | null,
  happy?: number | null,
  _version?: number | null,
};

export type DeleteEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateStarredEventInput = {
  id?: string | null,
  owner?: string | null,
  _version?: number | null,
  starredEventEventId?: string | null,
};

export type ModelStarredEventConditionInput = {
  and?: Array< ModelStarredEventConditionInput | null > | null,
  or?: Array< ModelStarredEventConditionInput | null > | null,
  not?: ModelStarredEventConditionInput | null,
};

export type StarredEvent = {
  __typename: "StarredEvent",
  id: string,
  owner?: string | null,
  Event?: Event | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStarredEventInput = {
  id: string,
  owner?: string | null,
  _version?: number | null,
  starredEventEventId?: string | null,
};

export type DeleteStarredEventInput = {
  id: string,
  _version?: number | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  heart?: ModelIntInput | null,
  thumbsup?: ModelIntInput | null,
  happy?: ModelIntInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items?:  Array<Event | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStarredEventFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelStarredEventFilterInput | null > | null,
  or?: Array< ModelStarredEventFilterInput | null > | null,
  not?: ModelStarredEventFilterInput | null,
};

export type ModelStarredEventConnection = {
  __typename: "ModelStarredEventConnection",
  items?:  Array<StarredEvent | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStarredEventMutationVariables = {
  input: CreateStarredEventInput,
  condition?: ModelStarredEventConditionInput | null,
};

export type CreateStarredEventMutation = {
  createStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStarredEventMutationVariables = {
  input: UpdateStarredEventInput,
  condition?: ModelStarredEventConditionInput | null,
};

export type UpdateStarredEventMutation = {
  updateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStarredEventMutationVariables = {
  input: DeleteStarredEventInput,
  condition?: ModelStarredEventConditionInput | null,
};

export type DeleteStarredEventMutation = {
  deleteStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items?:  Array< {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStarredEventsQueryVariables = {
  filter?: ModelStarredEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStarredEventsQuery = {
  syncStarredEvents?:  {
    __typename: "ModelStarredEventConnection",
    items?:  Array< {
      __typename: "StarredEvent",
      id: string,
      owner?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStarredEventQueryVariables = {
  id: string,
};

export type GetStarredEventQuery = {
  getStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStarredEventsQueryVariables = {
  filter?: ModelStarredEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStarredEventsQuery = {
  listStarredEvents?:  {
    __typename: "ModelStarredEventConnection",
    items?:  Array< {
      __typename: "StarredEvent",
      id: string,
      owner?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    title: string,
    date: string,
    description: string,
    heart?: number | null,
    thumbsup?: number | null,
    happy?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStarredEventSubscriptionVariables = {
  owner: string,
};

export type OnCreateStarredEventSubscription = {
  onCreateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStarredEventSubscriptionVariables = {
  owner: string,
};

export type OnUpdateStarredEventSubscription = {
  onUpdateStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStarredEventSubscriptionVariables = {
  owner: string,
};

export type OnDeleteStarredEventSubscription = {
  onDeleteStarredEvent?:  {
    __typename: "StarredEvent",
    id: string,
    owner?: string | null,
    Event?:  {
      __typename: "Event",
      id: string,
      title: string,
      date: string,
      description: string,
      heart?: number | null,
      thumbsup?: number | null,
      happy?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
