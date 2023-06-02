import { InjectionKey } from '@vue/runtime-core'
import { Ref } from 'vue'

export interface AudioInjectionKey {
  isPlaying: Ref<boolean>;
  isMuted: Ref<boolean>;
}

export const APP_AUDIO_INJECTION_KEY: InjectionKey<AudioInjectionKey> = Symbol('APP_AUDIO_INJECTION_KEY')

const isPlaying = ref<boolean>(false)
const isMuted = ref<boolean>(false)

const state = reactive({
  isPlaying: false,
  isMuted: false
})

watch(state, (newState) => {
  console.log('newState', newState)
})

export const provideAudio = () => provide(APP_AUDIO_INJECTION_KEY, toRefs(state))