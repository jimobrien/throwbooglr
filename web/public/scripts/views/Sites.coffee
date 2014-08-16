class Throwboogler.Views.Sites extends Backbone.View
	className: 'row sites-container'

	# template: '<div class="col-md-offset-1 col-md-10 sites"></div>'
	template: '<div class="col-md-offset-2 col-md-8">
							<h5 class="hidden"> ARCHIVES </h5>
							<ul class="sites list-unstyled"></ul>
						</div>'

	initialize: ->
		console.log @$el
		@collection.on 'reset', () ->
			@render()
		, @

		# @render()

	render: ->
		@$el.html @template
		@$('.sites').append ( 
			@collection.map (site) -> 
				new Throwboogler.Views.Site( model: site ).$el
			)
		@$(".livepreview").livePreview offset: 0
		@$('h5').removeClass('hidden')
		@
