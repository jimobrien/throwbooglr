class Throwboogler.Collections.Sites extends Backbone.Collection
	model: Throwboogler.Models.Site

	url: 'http:/10.4.11.249:3000/sites' #10.4.11.249

	initialize: ->

		@on 'search', (site) ->
			site = name: site
			# @reset site # for testing offline
			@fetch( data: site, reset: true ).success( (data) -> console.log data)
		, @

		@on 'add reset', (site) ->
			console.log 'added site to collection: ', site