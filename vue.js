var apiURL = 'https://webandsun.com/wp-json/wp/v2/posts';

window.onload = function () {
    var posts = new Vue({

        el: '#app',

        data: {
            posts: [],
        },

        created: function () {
            this.fetchData()
        },


        methods: {
            fetchData: function () {
                var xhr = new XMLHttpRequest();
                var self = this;
                var titles = [];
                xhr.open('GET', apiURL);
                xhr.onload = function () {
                    self.posts = JSON.parse(xhr.responseText);
                    //titles = self.posts.map(p => return p.titles);
                    //self.posts = escapeHtml(self.posts);
                    console.log(self.posts);
                    console.log(self.posts["title"]);
                };
                xhr.send()
            }
        }
    })
};


function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#8217;',
        "-": '&#8211;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
