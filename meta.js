const path = require("path");
const spawn = require("child_process").spawn;
const spinners = require("cli-spinners");
const ora = require("ora");

function runCommand(cmd, args, data) {
    const dirName = data.inPlace ? "": data.destDirName;
    const cwd = path.join(process.cwd(), dirName);
    const proc = spawn(
        cmd,
        args,
        {
            cwd,
            stdio: "ignore",
            shell: true
        }
    );
    return proc;
}

function buildSpinner(msg) {
    return ora({
        prefixText: msg,
        spinner: spinners.line,
    });
}

function installDependencies(data) {
    return new Promise(resolve => {
        if (data.autoInstall) {

            //process.stdout.write("   Install dependencies... ");
            const spinner = buildSpinner("   Install dependencies... ");
            spinner.start();

            const proc = runCommand("yarn", ["install"], data);

            proc.on("exit", () => {
                spinner.stop();
                console.log("   Install dependencies... done.")
                resolve();
            });
        }
        else {
            resolve();
        }
    });
}

function initializeGit(data) {
    if (data.useGit) {
        //process.stdout.write("   Initialize Git... ");
        const spinner = buildSpinner("   Initialize Git... ");
        spinner.start();

        const proc = runCommand("yarn", ["install"], data);

        proc.on("exit", () => {
            spinner.stop();
            console.log("   Initialize Git... done.")
        });
    }
    else {
        return;
    }
}

module.exports = {
    prompts: {
        name: {
            type: "string",
            message: "Project name",
            required: true
        },
        description: {
            type: "string",
            message: "Project description",
            default: "An application with vue",
            required: true
        },
        author: {
            type: "string",
            message: "Author"
        },
        useGit: {
            type: "confirm",
            message: "Use Git or not?",
            default: true
        },
        useVuex: {
            type: "confirm",
            message: "Use Vuex or not?",
            default: true
        },
        useBuefy: {
            type: "confirm",
            message: "Use Buefy or not?",
            default: true
        },
        autoInstall: {
            type: "confirm",
            message: "Install dependencies automatically or not?",
            default: true
        }
    },
    filters: {
        "src/store/**/*": "useVuex"
    },
    complete: data => {
        installDependencies(data)
            .then(() => {
                initializeGit(data)
            });
    }
};
