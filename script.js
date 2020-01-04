var searchTerm = $("#search");
var numOfRecords = $("#numOfRecords");
var startYear = $("#start-year");
var endYear = $("#end-year");
var searchButton = $("#search-button");
var clearButton = $("#clear-button");

//Response will append to ArticlesList

var articles = $(this).val("#search");
var numofArticles = $(this).val("#numOfRecords");

searchButton.on("click", function() {
  var articles = searchTerm.val();
  var numofArticles = $(this).val("#numOfRecords");
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    articles +
    "&api-key=fF8RFGM08ZRt8qUYBwfvoAGHMlrYEvTe" +
    numofArticles;
  console.log(articles);

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   var results = response.data;
  // });
});

clearButton.on("click", function() {});
