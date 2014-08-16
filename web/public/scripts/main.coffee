@Throwboogler =
	Models: {}
	Views: {}
	Collections: {}

($(document).ready () -> 
	app = new Throwboogler.Views.App( model: new Throwboogler.Models.App()).$el.appendTo 'body'

	# app.get('sites').reset(s.reset({url: 'https://throwback.blob.core.windows.net/files/104874631'}))
)