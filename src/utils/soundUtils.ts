import { Howler, Howl } from 'howler';

type SoundPlayOptions = {
  autoplay: boolean;
  loop: boolean;
  volume: number;
  playOnVisible?: boolean;
};

let player: Howl | null = null;

export async function resumeAudioContext(): Promise<void> {
  if (Howler.ctx && Howler.ctx.state === 'suspended') {
    await Howler.ctx.resume();
  }
}

export function initPlayer(soundURL: string, options?: SoundPlayOptions): Howl {
  const { loop = true, autoplay = false, volume = 0.2, playOnVisible = true } = options || {};

  player = new Howl({
    src: [soundURL],
    autoplay,
    loop,
    volume,
    onplayerror: () => player?.once('unlock', () => player?.play()),
  });

  player.once('load', () => {
    if (autoplay && document.visibilityState === 'visible') {
      player?.play();
    }
  });

  player.on('play', () => {
    if (!player?.playing()) {
      player?.play();
    }
  });

  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      player?.pause();
    } else {
      if (!playOnVisible) return;
      player?.play();
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange, false);

  return player;
}

export function play(): void {
  player?.play();
}

export function pause(): void {
  player?.pause();
}

export function stopAllSongs(): void {
  Howler.stop();
}
