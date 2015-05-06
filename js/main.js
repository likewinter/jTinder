/**
 * jTinder initialization
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
        var num = getRandomInt(1,5);
	    $('<li class="pane'+num+'"><div class="img"></div><div>Random</div><div class="like"></div><div class="dislike"></div></li>').delay(1000).prependTo('#tinderslide ul');
        $('#status').html('Dislike image ' + (item.index()+1));
    },
	// like callback
    onLike: function (item) {
        var num = getRandomInt(1,5);
        $('<li class="pane'+num+'"><div class="img"></div><div>Random</div><div class="like"></div><div class="dislike"></div></li>').delay(1000).prependTo('#tinderslide ul');
        $('#status').html('Like image ' + (item.index()+1));
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike',
    refreshOnNext: true
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});
