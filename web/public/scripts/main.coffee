@Throwboogler =
	Models: {}
	Views: {}
	Collections: {}

($(document).ready () -> 
	new Throwboogler.Views.App( model: new Throwboogler.Models.App()).$el.appendTo 'body'
)