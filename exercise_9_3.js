// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
// 
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
$('.btn').click(function() {
 $('.text').text('loading . . .');
  var userinput=$('.user-input').val();
  $.ajax({
    type:"GET",
    url:"http://www.reddit.com/r/aww/search.json",
    data: {
      q: userinput,
      restrict_sr: "true",     
    },
    success: function(response) {

      $('.text').html('');
        for( var i=0; i<response.data.children.length;i++ ) {
          $('.text').append('<img src="' + response.data.children[i].data.thumbnail + '" />');
        }
    },
  });    
});

