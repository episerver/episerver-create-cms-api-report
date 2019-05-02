# Create CMS API Report

> Analyze your Episerver project to make sure only public non-deprecated Episerver CMS API's are used.

## Run

Run this in your project root folder, or the root of your CMS UI extensions for a faster analysis.

### yarn

```bash
yarn create @episerver/cms-api-report
```

### npm

```bash
npx @episerver/create-cms-api-report
```

### Local executable

See the [releases on Github](https://github.com/seriema/episerver-create-cms-api-report/releases) to download an executable and run it from a command line.

## Usage

There are two outputs:
1. a summary table output in the command line that shows what API's you are using that are considered internal or deprecated.
1. a file, `episerver-cms-api-usage.json`, containing more details on which files are using what API's. We on the Episerver CMS UI product are especially interested in this so feel free to send it to [jp.johansson@episerver.com](mailto:jp.johansson@episerver.com). [[Read more.](telemetry.md)]
