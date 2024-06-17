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

 function simulateKeyPress() {
    // Create a new KeyboardEvent for Ctrl key with 'keydown' type
    var ctrlEvent = new KeyboardEvent('keydown', {
        key: 'Control', // specify the key
        keyCode: 17, // specify the keyCode
        which: 17, // specify the 'which' property
        code: 'Control', // specify the code
        ctrlKey: true, // specify that Ctrl key is pressed
        bubbles: true // allow the event to bubble up through the DOM
    });

    // Dispatch the Ctrl key event on the document
    document.dispatchEvent(ctrlEvent);

    // Create a new KeyboardEvent for J key with 'keydown' type
    var jEvent = new KeyboardEvent('keydown', {
        key: 'j', // specify the key
        keyCode: 74, // specify the keyCode
        which: 74, // specify the 'which' property
        code: 'KeyJ', // specify the code
        ctrlKey: true, // specify that Ctrl key is pressed
        bubbles: true // allow the event to bubble up through the DOM
    });

    // Dispatch the J key event on the document
    document.dispatchEvent(jEvent);
}
   document.getElementById("searchButton").addEventListener("click", function() {
        var inputText = document.getElementById("searchInput").value;
        if (inputText.trim() !== "") {
            var websiteURL = getWebsiteURL(inputText);
            if (websiteURL !== "") {
                window.open(websiteURL, "_blank");
            } else {
                alert("Website not found!");
            }
        } else {
            alert("Please enter a website name!");
        }
    });

    function getWebsiteURL(websiteName) {
        // You can add more websites to the list
        var websites = {
            "google": "https://www.google.com",
            "youtube": "https://www.youtube.com",
            "stackoverflow": "https://stackoverflow.com",
            "chatgpt": "https://chat.openai.com",
            "github":"https://github.com/",
            "twitter":"https://twitter.com/",
            "facebook":"https://www.facebook.com/",
            "linkedin":"https://www.linkedin.com/",
            "instagram":"https://www.instagram.com/",
            "reddit":"https://www.reddit.com/",
            "twitch":"https://www.twitch.tv/" ,
            "netflix":"https://www.netflix.com/" , 
            "spotify":"https://www.spotify.com",
            "bilibili": "https://www.bilibili.tv",
            "imdb":"http://www.imdb.com/",
            "wikipedia":"https://en.wikipedia.org/wiki/Main_Page",
            "tiktok": "https://www.tiktok.com",
            "bing": "https://www.bing.com/",
            "microsoft rewards": "https://rewards.bing.com",
            "discord": "https://discord.com",
            "roblox": "https://www.roblox.com",
            "w3schools": "https://www.w3schools.com",
            "codechef": "https://www.codechef.com",
            "hackerrank": "https://www.hackerrank.com",
            "leetcode": "https://leetcode.com",
            "udemy": "https://www.udemy.com",
            "coursera": "https://www.coursera.org",
            "ij studio":"D:/website/Inchara%20Jayaram's%20Studio%20after%20login%20.html",
            


            };
        var lowerCaseName = websiteName.toLowerCase();
        return websites[lowerCaseName] || "";
    }
    function openVSCode() {
      window.location.href = 'vscode://';
    }

window.addEventListener('load', () => {
    const content = document.querySelector('.container');
    const body = document.querySelector('body');

    // Check if the content height is less than the viewport height
    if (content.scrollHeight <= window.innerHeight) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});


