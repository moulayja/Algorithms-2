function projection() {
    var newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "rating": [4.0]
      }, {
        "id": 654356453,
        "title": "Bad Boys",
        "rating": [5.0]
      }, {
        "id": 65432445,
        "title": "The Chamber",
        "rating": [4.0]
      }, {
        "id": 675465,
        "title": "Fracture",
        "rating": [5.0]
      }],
      videoAndTitlePairs = [];
  
    newReleases.forEach(function(video) {
      videoAndTitlePairs.push({
        id: video.id,
        title: video.title
      });
    });
  
    return videoAndTitlePairs;
  }
  
  console.log(projection());
  /*
  [{id: 10111470, title: "Die Hard"}, 
  {id: 654356453, title: "Bad Boys"}, 
  {id: 65432445, title: "The Chamber"},
  {id: 675465, title: "Fracture"}
  ]
  */
  