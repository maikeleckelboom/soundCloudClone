<script lang='ts' setup>
import WaveSurfer from 'wavesurfer.js'
import { Ref } from 'vue'

const colorScheme = shallowReactive({
  primary: '#ff8800',
  onPrimary: '#4e2600',
  primaryContainer: '#6f3800',
  onPrimaryContainer: '#ffdcc4',
  secondary: '#e4bfa7',
  onSecondary: '#422b1a',
  secondaryContainer: '#5b412f',
  onSecondaryContainer: '#ffdcc4',
  tertiary: '#c6ca95',
  onTertiary: '#2f330c',
  tertiaryContainer: '#464a20',
  onTertiaryContainer: '#e3e7af',
  error: '#ffb4ab',
  onError: '#690005',
  errorContainer: '#93000a',
  onErrorContainer: '#ffb4ab',
  background: '#201a17',
  onBackground: '#ece0da',
  surface: '#201a17',
  onSurface: '#ece0da',
  surfaceVariant: '#52443b',
  onSurfaceVariant: '#d6c3b7',
  outline: '#9f8d82',
  outlineVariant: '#52443b',
  shadow: '#000000',
  scrim: '#000000',
  inverseSurface: '#ece0da',
  inverseOnSurface: '#362f2b',
  inversePrimary: '#924c00',
})


//
// const { isMuted: isForcedMuted } = inject(APP_AUDIO_INJECTION_KEY, {
//   isMuted: ref<boolean>(false)
// })

interface TrackControls {
  volume: boolean
  mute: boolean
  playPause: boolean
  stop: boolean
}

const {
  name,
  src,
  ...props
} = defineProps<{ id?: string, src: string, name: string, controls?: TrackControls }>()

const controlToggles = reactive({
  volume: props.controls?.volume ?? true,
  mute: props.controls?.mute ?? true,
  playPause: props.controls?.playPause ?? true,
  stop: props.controls?.stop ?? true
})


const track = shallowRef<WaveSurfer>()
const trackWaves = ref<HTMLElement>()

onMounted(() => {
  if (!trackWaves.value) return
  track.value = WaveSurfer.create({
    container: trackWaves.value as HTMLElement,
    waveColor: colorScheme.primary,
    progressColor: colorScheme.primaryContainer,
    barWidth: 4,
    barRadius: 2,
    cursorWidth: 2,
    cursorColor: colorScheme.inversePrimary,
    hideScrollbar: true
  })
})

whenever(track, (wavesurfer) => {
  // @expect-error (userActivation.hasBeenActive is not yet true)
  wavesurfer.load(src)
  wavesurfer.setVolume(context.volume)
})

const context = reactive({
  playing: false,
  muted: false,
  volume: 0.8,
  currentTime: 0,
  duration: 0,
  timesPlayed: 0
})

whenever(track, (surfer: WaveSurfer) => {
  if (!surfer) return

  surfer.on('seek', (value: number) => {
    context.currentTime = value
  })
  surfer.on('interaction', () => {
    if ('userActivation' in navigator && !navigator.userActivation.hasBeenActive) {
      return
    }
    context.playing = true
    surfer.play()
  })
  surfer.on('click', (progress: number) => {
    surfer.seekTo(progress)
  })
  surfer.on('ready', () => {
    context.duration = surfer.getDuration()
    surfer.zoom(100)
  })
  surfer.on('audioprocess', () => {
    context.currentTime = surfer.getCurrentTime()
  })
  surfer.on('play', () => {
    context.playing = true
  })
  surfer.on('pause', () => {
    context.playing = false
  })
  surfer.on('volume', (value: number) => {
    context.volume = value
  })
  surfer.on('mute', (value: boolean) => {
    context.muted = value
  })
  surfer.on('finish', () => {
    context.currentTime = 0
    context.playing = false
    context.timesPlayed++
    surfer.setTime(0)
  })
})

const onSeek = (progress: number) => {
  if (!track.value) return

  track.value.seekTo(progress)
}

const onStop = () => {
  if (!track.value || !context.playing) return
  context.playing = false

  track.value.stop()
}

const onPlayPause = () => {
  if (!track.value) return

  context.playing = !context.playing
  track.value.playPause()
}
const onVolumeChange = (value: number) => {
  if (!track.value) return

  track.value.setVolume(value)
  context.volume = value
}

const onMute = () => {
  if (!track.value) return
  track.value.setMuted(!context.muted)
  context.muted = !context.muted
  context.volume = context.muted ? 0 : 0.8
}

watch(() => context.volume, async (volume) => {
  if (!track.value) return

  track.value.setVolume(volume)
  track.value.setMuted(volume === 0)

})

const currentElement = useCurrentElement() as Ref<HTMLDivElement>

const { focused } = useFocus(currentElement)

const { enter, space, m, arrowUp, arrowDown, arrowLeft, arrowRight } = useMagicKeys({
  passive: false,
  onEventFired: (ev: KeyboardEvent) => {
    ev.preventDefault()
  }
})

const enterOrSpace = computed(() => enter.value || space.value)

whenever(enterOrSpace, () => {
  if (!focused.value) return
  onPlayPause()
})

whenever(m, () => {
  if (!focused.value) return
  onMute()
})

whenever(arrowUp, () => {
  if (!focused.value) return
  onVolumeChange(context.volume + 0.1)
})

whenever(arrowDown, () => {
  if (!focused.value) return
  onVolumeChange(context.volume - 0.1)
})

whenever(arrowLeft, () => {
  if (!focused.value) return
  const progress = Math.floor(context.currentTime / context.duration * 100) / 100
  const position = progress - 0.05
  const positionProgress = Math.max(0, position)
  onSeek(positionProgress)
})

whenever(arrowRight, () => {
  if (!focused.value) return
  const progress = Math.floor(context.currentTime / context.duration * 100) / 100
  const position = progress + 0.05
  const positionProgress = Math.min(1, position)
  onSeek(positionProgress)
})

const padZero = (value: number) => Math.floor(value).toString().padStart(2, '0')

const durationText = computed(() => {
  const minutes = padZero(context.duration / 60)
  const seconds = padZero(context.duration % 60)
  return `${minutes}:${seconds}`
})

const currentTimeText = computed(() => {
  const minutes = padZero(context.currentTime / 60)
  const seconds = padZero(context.currentTime % 60)
  return `${minutes}:${seconds}`
})
</script>

<template>
  <div
    class='relative min-h-38 w-full min-w-96 my-4 bg-surface-level-1 rounded-md border border-transparent outline-none hover:opacity-100  opacity-70 focus:opacity-100 focus-within:opacity-100 focus-visible:opacity-100'
    tabindex='0'
  >
    <div class='flex justify-between items-center m-2'>
      <p class='text-title-small text-on-surface-variant leading-loose'>
        {{ name }}
      </p>
    </div>

    <slot name='track'>
      <output :id='name' ref='trackWaves' class='h-full w-full' />
    </slot>

    <div
      class='flex flex-nowrap mt-4 gap-4 bg-surface-level-1 rounded-md  z-10 left-0 bottom-0 right-0'
    >

      <div v-if='controlToggles' class='flex flex-nowrap items-center gap-2 ml-2'>
        <button class='p-2 rounded-md hover:bg-surface-level-3 hover:disabled:opacity-10 active:bg-surface-level-4'
                @click='onPlayPause'>
          <Icon v-if='context.playing' class='w-7 h-7' name='ic:round-pause' />
          <Icon v-else class='w-7 h-7' name='ic:round-play-arrow' />
        </button>
        <button v-if='controlToggles.stop'
                :aria-disabled='(context.currentTime === context.duration || context.currentTime === 0)'
                class='p-2 rounded-md aria-disabled:opacity-40 hover:bg-surface-level-3 hover:disabled:opacity-10 active:bg-surface-level-4'
                @click='onStop'>
          <Icon class='w-7 h-7' name='ic:round-stop' />
        </button>
        <button
          :aria-disabled='(!context.playing && context.currentTime === context.duration) || context.currentTime === 0'
          class='p-2 rounded-md aria-disabled:opacity-40 hover:bg-surface-level-3 hover:disabled:opacity-10 active:bg-surface-level-4'
          @click='onSeek(0)'>
          <Icon class='w-7 h-7' name='ic:round-replay' />
        </button>
        <button v-if='controlToggles.mute'
                class='p-2 rounded-md hover:bg-surface-level-3 hover:disabled:opacity-10 active:bg-surface-level-4'
                @click='onMute'>
          <Icon v-if='context.muted' class='w-7 h-7' name='ic:round-volume-off' />
          <Icon v-else class='w-7 h-7' name='ic:round-volume-up' />
        </button>
      </div>
      <div class='flex flex-nowrap items-center gap-3 flex-1 ml-2'>
        <input
          v-if='controlToggles.volume'
          :value='context.volume'
          class='h-14 w-full bg-error flex bottom-0 left-0 right-0 rounded-md accent-primary'
          max='1'
          min='0'
          step='0.1'
          type='range'
          @input='onVolumeChange($event.target.valueAsNumber)'
        />
        <!--        <p class='tabular-nums text-on-surface-variant text-label-large w-10 text-end'>-->
        <!--          {{ `${context.volume * 100}%` }}-->
        <!--        </p>-->
      </div>
      <div class='flex items-center justify-end pr-4'>
        <p class='text-label-medium tabular-nums text-on-surface-variant '>
          {{ currentTimeText }} / {{ durationText }}
        </p>
      </div>
    </div>

  </div>
</template>