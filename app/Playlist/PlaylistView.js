var PlaylistView = Backbone.View.extend({
  className: 'playlist-view',
  template: _.template('<span class="name"><%= name %></span>'),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var PlaylistsView = Backbone.View.extend({
  template: _.template("<p>List of songs</p><div class='song'></div><ul class='songs-view'></ul>"),
  _nestedView: [],
  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },
  render: function () {
    this.$el.html(this.template());
    var that = this;
    var partEl = $(this.el.querySelector('.playlist-view'));
    this.collection.forEach(function(model) {
        var playlistView = new PlaylistView({
          model: model
        });
        participantView.render();
        that.renderNestedView(playlistView, partEl);
    });
  }
});
