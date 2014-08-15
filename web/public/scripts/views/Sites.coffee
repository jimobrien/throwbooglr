class Throwboogler.Views.Sites extends Backbone.View
	className: 'row sites-container'

	template: '<div class="col-md-offset-1 col-md-10 sites offscreen"></div>'

	initialize: ->
		@collection.on 'reset', () ->
			@render()
		, @

		@render()

	render: ->
		@$el.html @template
		@$('.sites').append ( 
			@collection.map (site) -> 
				new Throwboogler.Views.Site( model: site ).$el
			)
		@$('.sites').removeClass('offscreen')
		@