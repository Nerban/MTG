const path = require("path");
const prettier = require("prettier");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (config) => {
    // This enable all the dependency libraries inside the `assets` folder
    config.addPassthroughCopy({
        "node_modules/reveal.js/dist": "assets/reveal/",
        "node_modules/reveal.js/plugin": "assets/reveal/plugin",
    });

    // This copies anything from `src/images` into `dist/images`.
    // Call it using <img src="images/my-image.jpg" />
    config.addPassthroughCopy("./src/images/");
    config.addPassthroughCopy("./src/style/");

    

    // Prettifies the output html so the indentations are correct
    config.addTransform("prettier", function (content, outputPath) {
        const extname = path.extname(outputPath);
        switch (extname) {
            case ".html":
                // Strip leading period from extension and use as the Prettier parser.
                const parser = extname.replace(/^./, "");
                return prettier.format(content, { parser });

            default:
                return content;
        }
    });

    config.addPlugin(pluginRss);

    config.setBrowserSyncConfig({  callbacks: {ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');
        browserSync.addMiddleware("*", (req, res) => {               
            res.write(content_404);        
            res.end();      
        });   
     },  
    },  
    ui: false,  ghostMode: false});

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        pathPrefix: "/MTG/",

        dir: {
            input: "src",
            output: "dist",
        },
    };
};
