const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        new HtmlWebpackPlugin({
         
            template:"./src/template.html",
            filename:"index.html" , 
        }),
    ]
}