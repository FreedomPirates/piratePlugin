class countDown {
    cdFlag = -1; //倒计时标识
    opt = {}; //配置项
    tickTime = 1; //倒计时间隔时间，默认1秒
    pauseFlag = false;
    pauseTime = 0;
    cdTime=5;
    isCounting = false; //是否倒计时中
    constructor(opt) {
        if (opt) {
            this.opt = opt
            this.start(opt);
        }

    }
    //开始倒计时{cdTime,tickTime,startCall, tickCall, endCall}
    start(opt) {
        var that = this;
        this.opt = opt;
        this.reset();
        that._doCallback(opt.startCall);
        that.isCounting = true;
        doFun();
        //开始倒计时
        that.cdFlag = setInterval(function () {
            doFun();
        }, that.tickTime * 1000);

        function doFun() {
            if (that.pauseFlag) {
                return false;
            }
            that.cdTime--;
            that.pauseTime++;
            that._doCallback(opt.tickCall);
            if (that.cdTime == 0) {
                that.stop();
                that._doCallback(opt.endCall);
            }
            return false;
        }
    }
    addCdTime(num){
        this.cdTime+=num;
    }

    //停止倒计时
    stop() {
        this.isCounting = false;
        clearInterval(this.cdFlag);
    }
    //暂停
    pause() {
        this.pauseFlag = true;
        this.pauseTime = 0;
    }
    //继续
    continu() {
        this.pauseFlag = false;
    }
    //重置
    reset() {
        clearInterval(this.cdFlag);
        this.cdTime = this.opt.cdTime || 5;
        this.tickTime = this.opt.tickTime || 1;
        this.pauseFlag = false;
        this.isCounting = false;
        this.pauseTime = 0;
    }
    //判断并执行回调
    _doCallback(callback) {
        if (callback && typeof callback == 'function') {
            callback(this);
        }
    }
    //
};

export default countDown
