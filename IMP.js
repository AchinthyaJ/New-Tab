document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.circle-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
              document.querySelector('.circle-cursor').style.border = '3px solid black';
        });
        link.addEventListener('mouseleave', function() {
              document.querySelector('.circle-cursor').style.border = '3px solid white';
        });
    });

document.addEventListener('scroll', () => {
    const cursor = document.querySelector('.circle-cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + window.scrollY + 'px';
});
  
  
  
var cursor = document.querySelector(".circle-cursor");

document.addEventListener("mouseout", function(event) {
  if (event.relatedTarget === null) {
   document.querySelector(".circle-cursor").style.display = "none";
   document.body.style.cursor = "default"; // Change cursor back to default if it's out of the page
  }
});

document.addEventListener("mouseover", () => {
        document.querySelector(".circle-cursor").style.display = "block";
        document.body.style.cursor = "none"; // Hide default cursor when mouse is over the page
    });

const searchBar = document.getElementById('search-bar');
        const searchForm = document.getElementById('search-form');

        searchBar.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                const query = searchBar.value.trim();
                search(query);
            }
        });

        function search(query) {
            // Check if the input looks like a URL
            const urlRegex = /^(http(s)?:\/\/)?([\w-]+.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
            if (urlRegex.test(query)) {
                // If it's a URL, load it
                window.location.href = addHttpIfMissing(query);
            } else {
                // If it's not a URL, submit the form with the search query
                searchForm.submit();
            }
        }

        function addHttpIfMissing(url) {
            // Add 'http://' prefix if missing
            if (!/^https?:\/\//i.test(url)) {
                return 'http://' + url;
            }
            return url;
        }
