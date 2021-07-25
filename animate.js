// 简单动画函数封转obj目标对象 target目标位置
        // 给不同的元素指定了不同的定时器
        function animate (obj,target,callback) {
            // console.log(callback);  callback = function () {}  调用的时候：callback（）；
            // 当我们不断地点击按钮，这个元素的速度会越来越快，原因就是每点击一次按钮，定时器就会开启，多个定时器会叠加
            // 解决方案：让元素只有一个定时器执行
            // 先清除以前的定时器，只保留当前一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                // 步长值写到定时器里面
                // 把步长值取整数 不要出现小数问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - obj.offsetLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止定时器
                
                clearInterval(obj.timer);
                // 回调函数写到结束定时器里面
                if (callback) {
                    callback();
                }

            } else {
                // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：（目标值-现在的位置）/10
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        },15);
        }