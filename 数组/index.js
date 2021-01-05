//洗牌乱序   
Array.prototype.shuffle = function () {
    let m = this.length, i;
    while (m) {
        i = (Math.random() * m--) >>> 0;
        [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
}

//统计重复项
a.word.localeCompare(b.word) //字母排序
function groupWord(ary) {
    var res = [];
    ary.sort((a, b) => a - b);
    for (var i = 0; i < ary.length;) {
        var count = 0;
        for (var j = i; j < ary.length; j++) {
            if (ary[i] == ary[j]) {
                count++;
            }
        }
        res.push({ val: ary[i], count });
        i += count;
    }
    return res
}
