# [RemoveCSDNInBingSearch](https://github.com/Zeng-Tao/RemoveCSDNInBingSearch)
 Bing/Google 搜索中隐藏 CSDN 结果


## 说明

在 Bing/Google 搜索中隐藏 CSDN 结果, 由于某些原因, 我不希望显示它们, 此脚本即为此目的.  

我发现可以通过 Tampermonkey 浏览器插件来加载脚本来实现我的目的. 所以此脚本依赖于 Tampermonkey 插件.   

为了不一棒子打死, 我在搜索结果的页面中添加了一个按钮来开关显示来自 CSDN 站点的搜索结果.

## 演示

![演示GIF](演示.gif '演示GIF')

## 安装

假设你已经 [安装 Tampermonkey](https://www.tampermonkey.net/) 成功.

在 Tampermonkey `添加新脚本` 页中, 你将看到一个文本编辑器及脚本模板, 将本项目中的 `js.js` 文件中的内容复制并覆盖编辑器中的内容, 然后直接按 <kbd>Ctrl</kbd>+<kbd>S</kbd> 键, 或点击编辑器中的 `文件>保存` 保存新建的脚本. 此时我们编写的脚本即可生效.

同样我们可以在 Tampermonkey 管理面板的已安装脚本中看到名为 `搜索中隐藏 CSDN 结果` 的脚本.


## 其他

随意
