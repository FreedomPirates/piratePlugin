/**
 * Created by haoguo on 1/29/17.
 */

var column_num = 4;
var margin_left = 15;//rem
var bar_width = 226;//模块宽度rem


var $pluginMain = $('#plugin-content');
var workFlow = {
    init: function () {
        this.getData();
    },
    getData: function () {
        var data = list;
        this.renderList(data,false);
        this.checkWindow();
    },
    renderList: function (data,add) {//数据,是否添加
        var str = '';
        $.each(data, function (idx, obj) {
            console.log(obj);
            var imgStr='';
            if(obj.img_size!=''&&obj.img_size!=undefined){
                var imgArr=obj.img_size.split(',');
                var imgHeight=Math.round(bar_width*parseInt(imgArr[1].trim())/parseInt(imgArr[0].trim()));
            }
            
            if(obj.title_img_href==''||obj.title_img_href==undefined){
                imgStr='<div class="img-notFond">图片加载失败</div>';
            }else{
                imgStr='<div style="height:'+imgHeight+'px"><img src="'+obj.title_img_href+'" alt="题图"></div>';
            }
            str +=
                '<li class="j-bar"><a class="content-bar" href="'+obj.article_href+'"> ' +
                '<h3 class="author">'+obj.author+'</h3> ' +
                imgStr +
                '<h3 class="title">'+obj.title+'</h3> ' +
                '<p class="description">'+obj.description+'</p> ' +
                '</a></li>'
        });
        if(add){
            $pluginMain.append(str);
        }else{
            $pluginMain.html(str);
        }
        this.layout();
    },
    layout: function () {
        var barHeight = [];//用于储存每一列每一个模块的高度
        var $bars = $pluginMain.find('.j-bar');
        var left_px = [];//每列的left值(rem)
        $pluginMain.css('width', column_num * bar_width + (column_num - 1) * margin_left + 'px');//主体宽度
        for (var a = 0; a < column_num; a++) {
            left_px.push(a * (bar_width + margin_left));//根据列数生成的每列的left值(rem)
            barHeight[a] = [];
        }
        console.log(barHeight);
        var height_sum = function (column) {
            var step = Math.floor(i / column_num);
            barHeight[column].push($bars.eq(i).height());
            if (!step) {
                $bars.eq(i).css('top', '0');
            } else {
                var sum = 0;
                for (var j = 0; j < step; j++) {
                    sum += ( barHeight[column][j] + 10);
                }
                $bars.eq(i).css('top', sum);
            }
        };
        for (var i = 0; i < $bars.length; i++) {
            var column = i % column_num;
            $bars.eq(i).css('left', left_px[column] + 'px');
            height_sum(column);
        }
    },
    checkWindow:function(){
        var _this=this;
        var w_width=$(window).width();
        _this.watchWindow(w_width);
        $(window).resize(function () {
            w_width=$(window).width();
            _this.watchWindow(w_width);
        });
    },
    watchWindow: function (width) {
        var _this=this;
            console.log(width);
            if(width>1366){
                column_num=6;
                _this.layout();
            }else if(width<1230){
                column_num=4;
                _this.layout();
            }else if(1230<width<1366){
                column_num=5;
                _this.layout();
            }

    }


};
workFlow.init();
$('.j-add').click(function(){
    var list2 = [
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        },
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        },
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        },
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        },
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        },
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        },
        {
            title: '标题2',
            description: '描述',
            create_time: '创建时间'
        }
    ];
    workFlow.renderList(list2,true)
});