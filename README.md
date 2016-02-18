<!--<iframe src="https://giphy.com/embed/IF9SCR8ng9Pws" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>-->
<div class="link">

  <p><a href="http://thegreylady.herokuapp.com" target="_blank">The Grey Lady</a></p>

</div>

WELCOME TO THE GREY LADY. This application consumes a third party API provided by the New York Times for Developers.

An Example of the New York Times Articles Search API, which we will be using to grab articles, looks like this:

'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?callback=svc_search_v2_articlesearch&begin_date=20160201
&end_date=20160202&hl=true&api-key=62bd71e38ae6689ade861f7d1976e48f:6:74251473'

Notice the begin_date and end_date. We will use the controller $scope to control how these dates get put into the URL in order to make an $http.jsonp to the API.
