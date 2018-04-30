var request = new XMLHttpRequest();
request.open('GET', 'http://design.propcom.co.uk/buildtest/accordion-data.json', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        var accordionContainer = document.querySelector('.accordion');
        var accList = "";
        for(var i = 0; i < data.blocks.length; i++) {
            var accObj = data.blocks[i];

            accList +=
                '<div class="accordion-item">' +
                '<div class="accordion-header">' + '<h1>' + accObj.heading + '</h1>' + '</div>' +
                '<div class="accordion-content">' + '<p>' + accObj.content + '</p>' + '</div>' +
                '</div>'
            ;
        }
        accordionContainer.innerHTML = accList;
        function accClick(){
            var accLink = document.getElementsByClassName('accordion-item')
            for (var i = 0; i < accLink.length; i++) {
                var elem = accLink[i];
                elem.addEventListener('click', function (event) {
                    for (var j = 0; j < accLink.length; j++)
                        accLink[j].classList.remove("active")
                    this.classList.add('active');
                }, false);
            }
        }
        accClick();
    } else {
        console.log('error pulling in JSON')
    }
};

request.send();
