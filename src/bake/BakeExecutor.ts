
const exec = require('child_process').exec;

/**
 * Executes bake (must be in PATH) and captures its output 
 */
class BakeExecutor {

    private workspaceFolder: string;

    constructor(workspaceFolder: string) {
        this.workspaceFolder = workspaceFolder;
    }

    execute(args: string): Promise<string> {
        return new Promise((resolve, reject) => {
            exec('bake ' + args,
                {
                    cwd: this.workspaceFolder,
                    maxBuffer: 1024 * 1024
                }, function callback(error, stdout: string, stderr: string) {
                    if (error) {
                        if (stdout.length == 0) {
                            reject(error);
                        } else {
                            reject(stdout);
                        }
                        return;
                    }

                    resolve(stdout);
                });
        });
    }
}

export default BakeExecutor;