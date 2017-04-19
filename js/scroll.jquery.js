(function($) {
    $.fn.extend({
        Scroll: function(options) {
            //设置默认值
            var defaults={
                idx:0,
                speed:500,
                delay:2000
            }
            var options=$.extend(defaults,options);
            //遍历匹配元素的集合
            return this.each(function() {
                var o=options;
                var _this=$(this);
                var ht=_this.find("table").find("td").height();
                var length=_this.find("table").find("tr").length;
                console.log(ht,length)
                var timer=null;
                init();
                timer=setInterval(step,o.delay)
                _this.mouseover(function(){
                    clearInterval(timer)
                })
                _this.mouseout(function(){
                    clearInterval(timer)
                    timer=setInterval(step,o.delay)
                })
                function init(){
                    var clon=_this.find("table").clone();
                    _this.append(clon)
                }
                function step(){
                    o.idx=o.idx<length?(o.idx+1):1;
                    move(o.idx)
                }
                function move(i){
                    _this.find("table").eq(0).animate({"margin-top":-i*92},o.speed,function(){
                        if(i==length){
                        	$(this).css('margin-top',0);
//                          setTimeout(function(){
//                              _this.find("table").eq(0).css("margin-top",0)
//                          },o.speed)
                        }
                    });
                }
            });
        }
    });
})(jQuery);