// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    var html = [
      '<tr><th>Library</th></tr>',
      '<tr><th>Add</th>',
      '<th>Artist</th>',
      '<th>Song Name</th>',
      '<th>Play Count</th>',
      '<th>Upvote</th>',
      '<th>Downvote</th>',
      '<th>Votes</th></tr>',].join('');
    this.$el.html(html).append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
