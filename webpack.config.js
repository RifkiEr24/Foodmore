const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    mode:"development",
    entry:{
        app:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },{
                test:/\.woff$/,
                use:[
                    {
                        loader:"url-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/template.html",
            filename:"index.html"  
        }),
    ]
}