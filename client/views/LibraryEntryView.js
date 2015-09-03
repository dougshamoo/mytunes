// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template(['<td><button class="add">+</button></td>',
    '<td>(<%= artist %>)</td>',
    '<td><%= title %></td>',
    '<td><%= playCount %></td>',
    '<td><button class="up">^</button></td>',
    '<td><button class="down">v</button></td>',
    '<td><%= votes %></td>'].join('')),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {
    'click .add': function() {
      this.model.enqueue();
    },
    'click .up': function() {
      this.model.upvote();
    },
    'click .down': function() {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
