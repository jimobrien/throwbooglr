class Throwboogler.Views.App extends Backbone.View
	className: 'container main'

	template: _.template '<div class="header">
													<span class="title">throwboogler</span>
												</div>'

	initialize: ->
		@render()


	render: ->
		@$el.html @template
		@$el.append new Throwboogler.Views.SearchPane(model: @model).$el