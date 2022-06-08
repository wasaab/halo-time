export default interface VoiceTip {
  /** Enable voice feature button tip. */
  enable: string;
  /** Disable voice feature button tip. */
  disable: string;
  /** Voice feature unsupported by client button tip. */
  unsupported: string;
}

const buildTip = (feature: string, startPrefix?: string): VoiceTip => ({
  enable: `Enable ${startPrefix}voice ${feature}`,
  disable: `Disable voice ${feature}`,
  unsupported: `Voice ${feature} are not supported by your browser`
});

export const notificationTip: VoiceTip = buildTip('notifications');
export const cmdTip: VoiceTip = buildTip('commands', '"start ____" ');
