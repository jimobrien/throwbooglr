class Throwboogler.Views.App extends Backbone.View
	className: 'container main'

	template: _.template '<div class="row search">
													<div class="header">
														<span class="title">throwboogler</span>
													</div>
												</div>
											 '

	initialize: ->
		@render()


	render: ->
		@$el.html @template
		@$('.search').append new Throwboogler.Views.SearchPane(model: @model).$el
		@$el.append new Throwboogler.Views.Sites(collection: @model.get 'sites').$el