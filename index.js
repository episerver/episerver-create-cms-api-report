#!/usr/bin/env node

const EslintEngine = require("eslint").CLIEngine;
const args = require("arg")({
    "--xproduct": Boolean,
    "-x": "--xproduct"
});
const fs = require("fs");
const config = require("./npx-eslintrc.js");
const configXProduct = require("./npx-eslintrc-xproduct.js");

const eslint = new EslintEngine({
    // Only use the included config files.
    baseConfig: args["--xproduct"] ? configXProduct : config,
    useEslintrc: false
});

// Run on all files in the current directory.
const report = eslint.executeOnFiles(
    eslint.resolveFileGlobPatterns(["."])
);

// The default formatter "telemetry" is a JSON file we would like to have as feedback on our API's.
const telemetryFormatter = eslint.getFormatter("@episerver/cms");
fs.writeFile("episerver-cms-api-usage.json", telemetryFormatter(report.results), "utf8", (err) => {
    if(err) {
        throw err
    }
});

// Output a nice summary table.
const summaryFormatter = eslint.getFormatter("@episerver/cms/lib/summary");
console.log(summaryFormatter(report.results));
