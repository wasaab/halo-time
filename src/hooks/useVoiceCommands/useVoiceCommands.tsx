/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { mapToSpawns } from '../../model';
import type UseVoiceCommandsProps from './useVoiceCommands.types';

const startAllAliases = [
  'start timers',
  'start all',
  'start all timers',
  'restart timers',
  'restart all',
  'restart all timers',
  'start match',
  'start game'
];

const useVoiceCommands = ({ map, spawnTypes, onCommandChange, onStartAll }: UseVoiceCommandsProps) => {
  const buildCmd = ({ name }) => ({
    command: `start ${name.toLowerCase()}`,
    callback: () => onCommandChange(name),
    isFuzzyMatch: true,
    bestMatchOnly: true
  });
  const buildCmds = () => {
    const cmds = spawnTypes.flatMap((type) => mapToSpawns[map][type].map(buildCmd));

    cmds.push({
      command: startAllAliases,
      callback: onStartAll
    });

    return cmds;
  }
  const commands = useMemo(buildCmds, [map, spawnTypes]);
  const {
    transcript,
    interimTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition: voiceSupported
  } = useSpeechRecognition({ commands });

  const toggleMic = () => {
    if (!voiceSupported) { return; }

    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    }
  }

  useEffect(() => {
    if (interimTranscript) { return; }

    onCommandChange(null);
    setTimeout(resetTranscript, 80);
  }, [interimTranscript]);

  return {
    listening,
    speaking: Boolean(interimTranscript),
    transcript,
    voiceSupported,
    toggleMic
  };
};

export default useVoiceCommands;