import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'commands-mod',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 7,
  namespace: 'commands-mod-test',
  packUid: 'CFxeP4Z-',
  saveOptions: { path: './.pack' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
