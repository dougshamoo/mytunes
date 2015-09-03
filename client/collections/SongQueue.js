// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      var isFirstSong = (song === this.at(0));
      this.remove(song);

      if (isFirstSong) {
        if (this.length > 0) {
          this.playFirst();
        }
        else {
          this.trigger('stop', this);
        }
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});