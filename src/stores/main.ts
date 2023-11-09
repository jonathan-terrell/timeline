import { defineStore } from 'pinia';
import { type ShallowRef, shallowRef } from 'vue';

export interface EventConfig {
    id: string;
    firstName: string;
    middleNames?: string;
    lastName: string;
    start: string;
    end?: string;
}

export const useMainStore = defineStore('main', () => {
    const eventConfigs: ShallowRef<EventConfig[]> = shallowRef([]);
    return { eventConfigs };
});
