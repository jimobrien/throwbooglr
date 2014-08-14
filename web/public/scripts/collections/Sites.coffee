class Throwboogler.Collections.Sites extends Backbone.Collection
	model: Throwboogler.Models.Site

	url: ''

	initialize: ->
		#fetch something???
		@on 'add change', (site) ->
			site.get 'name'