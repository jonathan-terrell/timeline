import { defineStore } from 'pinia';
import { type ShallowRef, shallowRef } from 'vue';

export interface PersonConfig {
    id: number;
    personId: string;
    start?: string;
    end?: string;
    firstName: string;
    middleNames?: string;
    lastName: string;
}

export const useMainStore = defineStore('main', () => {
    const eventConfigs: ShallowRef<PersonConfig[]> = shallowRef([]);
    return { eventConfigs };
});
