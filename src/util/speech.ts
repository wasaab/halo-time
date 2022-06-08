const spawnMessages = ['; online', '\'s up', '; spawned', 'available'];
const getRandomSpawnMsg = () => spawnMessages[Math.floor(Math.random() * spawnMessages.length)];

/**
 * Speaks the spawn name to notify the user upon spawn.
 * Uses localized Google voice and random msg postfix.
 */
export default function speak(spawnName: string) {
  const speech = new SpeechSynthesisUtterance(`${spawnName}${getRandomSpawnMsg()}`);
  const userLang = window.navigator.language;
  const voices = window.speechSynthesis.getVoices();
  const localizedVoice = voices.find(({ name, lang }) => name.startsWith('Google') && lang === userLang);

  speech.voice = localizedVoice ?? voices[0];
  speech.volume =  0.2;

  window.speechSynthesis.speak(speech);
}
