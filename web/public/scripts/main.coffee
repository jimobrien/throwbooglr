@Throwboogler =
  Models: {}
  Views: {}
  Collections: {}

$(document).ready () -> 
  app = new Throwboogler.Views.App( model: new Throwboogler.Models.App() ).$el.appendTo 'body'
