class Throwboogler.Collections.Sites extends Backbone.Collection
	model: Throwboogler.Models.Site

	url: 'http://10.4.11.249:3000/sites'

	initialize: ->

		@on 'search', (site) ->
			site = name: site
			@fetch( data: site ).success( (data) -> 
				@trigger('render:site', data)
			)
		, @

		@on 'add', (site) ->
			console.log 'added site to collection: ', site