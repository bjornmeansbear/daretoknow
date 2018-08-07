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
    console.log(dingalinglen, dingbatAmt);

    for (var i=0; i<dingbatAmt; i++) {
        var pos = Math.floor(Math.random()*dingalinglen);
        charArray[pos].className = 'dingbat';
    }
};

dingbatify();
setInterval(dingbatify, 5000);
