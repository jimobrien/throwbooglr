class Throwboogler.Views.SearchPane extends Backbone.View
  className: 'col-md-offset-2 col-md-8'

  template: _.template '<div class="row">
                          <div class="col-md-offset-2 col-md-8 searchbox-container">
                            <input class="searchbox" placeholder="Enter a site here to start throwback-googln\'"></input>
                          </div>
                          <div id="loader" class="hidden">
                            <div id="d1"></div>
                            <div id="d2"></div>
                            <div id="d3"></div>
                            <div id="d4"></div>
                            <div id="d5"></div>
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
        $('.sites-container').addClass('hidden')
        $('#loader').removeClass('hidden')
        

  render: ->
    @$el.html @template
    @
