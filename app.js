(async () => {
    const Fontmin = await import("fontmin");
    const fs = require("fs");
  
    try {
      const fontFilePath = "./fontFile";
      const fontFileDir = fs.readdirSync(fontFilePath);
      const text = "数字能源云平台NềntảngnănglượngsốDigitalenergycloudplatform功率曲线今日ĐườngconglựclượngHômnayPowercurvetoday";
      
      const fonts = fontFileDir.filter((fd) => {
        let fileType = fd.split("."); 
        fileType = fileType[fileType.length - 1];
        return fileType === "ttf";
      });
  
      if (fonts.length < 1) throw "无可用.ttf字体文件";
  
      const fontmin = new Fontmin.default()
        .src(fontFilePath + "/" + fonts[0])
        .use(Fontmin.default.glyph({ text }))
        .dest("./output");
  
      fontmin.run((err, files) => {
        if (err) {
          throw err;
        } else {
          console.log("已生成新的字体文件，可前往 https://gero3.github.io/facetype.js 转成JSON格式");
        }
      });
    } catch (err) {
      console.error(err);
    }
  })();
  