/**
 * Created by chief on 16/7/16.
 */

define('illustrate',[],function(){
    var data = [{
          "backgroudColor": "#FD9C9C",
          "newslist": ko.observableArray([
              {
                "textImg": "http://design.yyuap.com/static/img/desiner3.jpg",
                "title": ko.observable("班级新闻"),
                "titleColor": "#258FB9",
                "textContext": "恭喜XXX收到新加坡国立大学研究生offer",
                "buttonText" : "查看更多",
                "titleSize": "18px"
              },{
                "textImg": "http://design.yyuap.com/static/img/desiner3.jpg",
                "title": "班级活动",
                "titleColor": "#fff",
                "textContext": "本周六组织爬佘山，大家积极报起名来",
                "buttonText" : "查看更多",
                "titleSize": "18px"
              },
              {
                "textImg": "http://design.yyuap.com/static/img/desiner3.jpg",
                "title": "班级通知",
                "titleColor": "#DF5157",
                "textContext": "国庆七天大假，放10月1号~7号",
                "buttonText" : "查看更多",
                "titleSize": "18px"
              }
          ])
        }];

    var illustrateModel = function(data) {
        this.illustrates = ko.observableArray(data);
      
        this.addItem = function() {
            var newIllustrateItem = {
                "textImg": "http://design.yyuap.com/static/img/desiner3.jpg",
                "title": ko.observable("班级新闻"),
                "titleColor": "#258FB9",
                "textContext": ko.observable("恭喜XXX收到新加坡国立大学研究生offer"),
                "buttonText" : ko.observable("查看更多"),
                "titleSize": "18px"
            };
            this.illustrates.newslist.push(newIllustrateItem); 
        }.bind(this); 

        this.deleteItem = function(item) {
            console.log(item);
            // this.illustrates.newslist.remove(item)
        }.bind(this);  
    };

    return new illustrateModel(data)
    
});
