module.exports = {
    moduleFileExtensions: [
        "js", "vue"
    ],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@modules/(.*)$": "<rootDir>/src/modules/$1"{{#useVuex}},
        "^@store/(.*)$": "<rootDir>/src/store/$1"{{/useVuex}}
    },
};
