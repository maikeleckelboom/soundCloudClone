import {SchemeJSON} from "~";
import {Ref} from "vue";

export const useLightScheme = (): Ref<SchemeJSON> => {
    const {$theme} = useNuxtApp();
    return computed(() => $theme.value.schemes.light.toJSON());
};
