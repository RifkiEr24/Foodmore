const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
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
            }, 
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html",
            filename:"index.html" , 
        }),
        new copyWebpackPlugin({
           patterns:[
          {
            from:path.resolve(__dirname,'src/img'),
            to:path.resolve(__dirname,'dist/img')
           },
           {
            from:path.resolve(__dirname,'dist/'),
            to:path.resolve(__dirname,'docs/')
         }
        ]       
     }),
    ]
}