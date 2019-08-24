$("#run-search").on("click", function(){
    event.preventDefault();
    var keyword =  "q=" + $("#search-term").val().trim();
    var numRecords = $("#article-count option:selected").val().trim();
    var apiKey = "&api-key=Cpp8aIgaqhJ6cImYfcBkDSJgGP5GjELK"
    var urlQuery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + keyword + apiKey;
    $.ajax({
        url: urlQuery,
        method: "GET"
    }).then(function(something){
        for (i =0; i<numRecords+1; i++){
        var html = $("<h2>").text(something.response.docs[i].headline.main);
        var htmlDOS = $("<p>").text(something.response.docs[i].abstract);
        $("#article-section").append(html);
        $("#article-section").append(htmlDOS);
       
        console.log(something);
        }
    })
    })