# What CMS UI JavaScript modules are being used?

The way the modules are currently loaded makes all CMS UI JavaScript modules available for use, but only the modules tagged as `public` are under [semantic versioning](https://semver.org/) in our [continuous release process](https://world.episerver.com/articles/Items/EPiServer-Continuous-Release-Process/). This means that there might be modules that _are not_ meant for public use but are widely used, and they can break on any upgrade - even patch releases.

The best way to make sure a module is part of the public API is to open the source file and check the `// tags:` in the code documentation, and verify that it says `public`. But we want to do two things:

1. Help you be aware of what is and isn't a public API
1. Help you transition from internal to public API's

This tool helps with part 1. At least on a module-level, as it doesn't detect usages of internal methods and fields on a public module.

For part 2 we need your help. We need to know what non-public API's you are using. With that information we can decide, per module, if we should make it public or if we need to write guides on what should be used instead. Our internal API is too large to do this without data to help us prioritize.

## How you can help

Run the tool as [per the instructions](README.md) and send us the JSON files to [jp.johansson@episerver.com](mailto:jp.johansson@episerver.com).
