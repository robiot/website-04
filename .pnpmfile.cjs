module.exports = {
    hooks: {
        readPackage(pkg) {
            if (pkg.peerDependencies["eslint"]) {
                pkg.peerDependencies["eslint"] = "*";
            }
            return pkg;
        },
    },
};
