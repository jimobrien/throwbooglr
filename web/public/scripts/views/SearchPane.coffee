class Throwboogler.Views.SearchPane extends Backbone.View
	className: 'col-md-offset-2 col-md-8'

	template: _.template '<div class="row">
													<div class="col-md-offset-2 col-md-8">
														<input class="searchbox"></input>
													</div>
												</div>'

	initialize: ->
		@render()

	events: 
		'keypress input': (event) -> 
			if event.keyCode == 13
				$target = $(event.target)
				@model.trigger('input:search', $target)
				$target.val ''
				

	render: ->
		@$el.html @template
		@