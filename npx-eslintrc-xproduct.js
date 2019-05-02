const config = require("./npx-eslintrc.js");

module.exports = Object.assign({}, config,
    {
        "rules": {
            "@episerver/cms/no-internal-episerver-apis": ["error", "xproduct"]
        }
    }
);
