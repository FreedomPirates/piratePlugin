## countDown

### 使用方法

    ```JavaScript
    const downTime = new countDown();
    downTime.start({
                cdTime: Math.floor(distance_time / 1000),
                tickTime: 1,
                tickCall: function (info) {
                  self.setData({
                    cd_time: sec_to_time(info.cdTime)
                  })
                }, endCall: () => {
                  //报名截止
                  self.setData({
                    term_status: 4
                  })
                }
              })
    ```