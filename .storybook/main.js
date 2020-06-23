const path = require('path');
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
module.exports = {
    stories: ['../components/**/*.stories.tsx', '../componentsForPages/**/*.stories.tsx', '../shared-components/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules = config.module.rules.map( data => {
            if (/svg\|/.test( String( data.test ) ))
                data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
            return data;
        });
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', {flow: false, typescript: true}]],
            },
        });
        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
            include: path.resolve(__dirname, '../'),
        });
        const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, "../pages/antd-custom.less"), "utf8"));
        config.module.rules.push({
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true,
                    modifyVars: themeVariables, // make your antd custom effective

                }
            }]
        });
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['babel-loader', '@svgr/webpack', 'url-loader']
        })
        config.module.rules.push(  {
            test: /\.svg$/,
            // loader: 'svg-inline-loader',
            loader: 'url-loader'
        })
        config.resolve.extensions.push('.ts', '.tsx', '.svg');
        config.resolve.alias["~"] = path.resolve(__dirname, '../');
        console.log(themeVariables);
        return config;
    },
};

