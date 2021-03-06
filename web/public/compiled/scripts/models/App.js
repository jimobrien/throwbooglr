// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Throwboogler.Models.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var sites;
      this.set('sites', sites = new Throwboogler.Collections.Sites());
      return this.on('input:search', function($target) {
        return sites.trigger('search', $target.val());
      }, this);
    };

    return App;

  })(Backbone.Model);

}).call(this);
