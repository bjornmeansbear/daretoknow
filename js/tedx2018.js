
// this makes the scrollable area really tall
var innerContent = $(".dingbatify").text();
var firstLine = innerContent.split('.', 1);
var wickedLong = firstLine[0] + ' / ' + innerContent + innerContent + innerContent + innerContent + innerContent + innerContent + innerContent + '/ ' + firstLine[0]
$(".dingbatify").html(wickedLong);

// this auto scrolls....
var thisScrolls = $(".scroller");
var scroller = setInterval(
  function() {
    var pos = thisScrolls.scrollTop();
    thisScrolls.scrollTop(++pos);
    if($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight)
      clearInterval(scroller);
  },
  10);

// this randomly rotates dingbats through the type.
var dingbatify = function() {
    var dingaling = $('h2.dingbatify');
    var charArray = $('span', dingaling);

    // case: No span (Initial String)
    if (charArray.length === 0) {
        var html = dingaling.html();
        var newArr = [];
        var len = html.length;
        for (var i=0; i<len; i++) {
            newArr.push('<span>' + html[i] + '</span>');
        }
        html = newArr.join('');
        dingaling.html(html);
        charArray = $('span', dingaling);
    }

    // Reset all spans
    $.each(charArray, function(i, value) {
        value.className = '';
    });

    var dingalinglen = charArray.length;
    var dingbatAmt = Math.floor(dingalinglen / 9);

    for (var i=0; i<dingbatAmt; i++) {
        var pos = Math.floor(Math.random()*dingalinglen);
        charArray[pos].className = 'dingbat';
    }
};

dingbatify();
setInterval(dingbatify, 3000);
