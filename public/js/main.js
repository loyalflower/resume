"user strict";

(function(){
    var config  = {
        url: "//comment.xinhuamotuo.com",
        listUrl: "/post/list",
    }

    var jsonp = function () {
        var jsonpNum = 0;

        return function(url, data, callback) {
            if (!callback) {
                callback = data;
                data = null;
            }

            jsonpCallback = 'callback'+jsonpNum;
            window[jsonpCallback] = function(result) {
                if (scriptTag) {
                    document.head.removeChild(scriptTag);
                }
                callback(result);
            }
            jsonpNum++;


            var dataStr = "";
            if (data) {
                for(var i in data) {
                    dataStr += i + "=" + encodeURIComponent(data[i])+'&';
                }
            }
            dataStr += "jsonp="+jsonpCallback;
            url += (url.indexOf("?") == -1 ? "?" : "&") + dataStr;

            var scriptTag = document.createElement("script");
            scriptTag.src = url;
            scriptTag.async = true;
            scriptTag.defer = true;

            document.head.appendChild(scriptTag);
        }
    }

    var jsonpRequest = jsonp();

    var comment = {
        list: function() {
            jsonpRequest(config.url+config.listUrl, function(response){

            });
        },
        
        add: function() {
            
        },

        editor: function () {

        }
    }


    comment.list();

})();