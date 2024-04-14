import { ActorsList } from './ui/ActorsList/ActorsList';
import {actorReducer} from './model/slice/actorSlice';
import {Actor} from './model/types/actor';
import {ActorSchema} from './model/types/actorSchema';

export {
    ActorsList,
    actorReducer
};

export type {
    Actor,
    ActorSchema,
}
