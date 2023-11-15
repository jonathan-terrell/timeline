import { dateDiffDays } from '@/main';
import { defineStore } from 'pinia';
import { type Ref, ref, type ShallowRef, shallowRef } from 'vue';

export interface PersonConfig {
    id: number;
    personId: string;
    start?: Date;
    end?: Date;
    firstName: string;
    middleNames?: string;
    lastName: string;
}

export const useMainStore = defineStore('main', () => {
    const maxEndDate: Ref<Date> = ref(new Date(new Date().getFullYear(), 11, 31));
    const minStartDate: Ref<Date> = ref(new Date(new Date().getFullYear(), 0, 1));
    const maxDurationDays: Ref<number> = ref(dateDiffDays(minStartDate.value, maxEndDate.value));
    const personConfigs: ShallowRef<PersonConfig[]> = shallowRef([]);
    return { minStartDate, maxDurationDays, maxEndDate, personConfigs };
});
