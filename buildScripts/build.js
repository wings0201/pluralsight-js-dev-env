import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';


/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

webpack(config).run((err, stats)=>{
    if(err){
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats =  stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow("webpack generate some warnings: "));
        return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats : ${stats}`);

    console.log(chalk.green('You application has been successfully built and written to /dist !'));

    return 0;

});
