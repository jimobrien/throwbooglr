// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Throwboogler.Views.Site = (function(_super) {
    __extends(Site, _super);

    function Site() {
      return Site.__super__.constructor.apply(this, arguments);
    }

    Site.prototype.tagName = 'li';

    Site.prototype.className = 'new-item';

    Site.prototype.template = _.template('<a href="<%= url %>" class="livepreview"> <%= date %> </a>');

    Site.prototype.initialize = function() {
      return this.render();
    };

    Site.prototype.render = function() {
      var model;
      model = this.model.toJSON();
      model = {
        date: new Date(Object.keys(model)[0]).toLocaleDateString(),
        url: model[Object.keys(model)[0]]
      };
      this.$el.html(this.template(model));
      return this;
    };

    return Site;

  })(Backbone.View);

}).call(this);
