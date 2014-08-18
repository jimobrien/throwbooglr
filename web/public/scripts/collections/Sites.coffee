class Throwboogler.Collections.Sites extends Backbone.Collection
  model: Throwboogler.Models.Site

  url: '/sites'

  parse: (data) ->
    results = []

    for key of data 
      if key != 'site'
        result = {}
        result[key] = data[key]
        results.push result

    results

  initialize: ->
    @on 'search', (site) ->
      site = name: site
      @fetch( data: site, reset: true )
    , @
