对原字体文件进行处理，只保留所用到的字符，以此来大幅度控制文件大小。注意！此功能实现依托于nodejs环境支持，你可以不懂node代码，但需要在你的电脑上安装node 官网下载地址https://nodejs.org/en/download

###### 1.项目拉取到本地之后执行npm install安装依赖。

###### 2.将需要转换的字体文件放置在/fontFile目录中。(只需要保留一种需要的字体文件)

###### 3.修改app.js中的text字段。(填写需要提取的字符，字符不要重复)

```
const text = "0123456789.%路段办公楼寓餐厅管理中心人Nềntảngnărgycloudplatfonglựcercurvetoday";
```

###### 4.执行node app.js指令。执行完成之后在outPut文件夹中查看生成的只包含特定字符的新字体文件。



