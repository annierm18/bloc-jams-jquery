class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);

      const duration = player.currentlyPlaying.duration;

      $('#time-control .total-time').text( player.prettyTime(duration) );

      console.log(duration);
  }
}

const helper = new Helper();
