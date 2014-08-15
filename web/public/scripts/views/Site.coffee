class Throwboogler.Views.Site extends Backbone.View
	className: 'col-md-3 site-container'

	template: _.template '<h2> <%= name %> </h2>'

	initialize: ->
		@render()

	render: ->
		@$el.html @template @model.toJSON()
		@