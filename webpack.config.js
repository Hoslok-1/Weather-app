module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:{
                    loader:'ts-loader'
                }
            },
            {    
                test: /\.css$/i,  
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
            },
        ]
    },
    devtool:true,
    devtool:'inline-source-map',
    resolve: {
        extensions:['.ts','.js']
    }
}