This extension adds support for bake based C++ projects to VS Code.

Bake is a build tool for C++ projects supporting:
- multiple modules (library, executable)
- multiple targets 

## Features

- Import include paths into VS Code
- Import C/C++ defines into VS Code

## Requirements

- bake installation >= 2.42.1 ([bake installation instructions](https://esrlabs.github.io/bake/install/install_bake.html#how-to-install-bake))
- Linux (more platforms will be supported soon)
- an existing `.vscode/c_cpp_properties.json` file ([how to create](https://code.visualstudio.com/docs/languages/cpp#_intellisense))

## Extension Settings

This extension contributes the following settings:

* `bake.mainProject`: define the main project (used to query the includes from bake)
 
## Known Issues

None

## Release Notes

### 0.2.0

second alpha release, supports:
- import of defines  on linux only

### 0.1.0

initial alpha release, supports:
- import of include paths on linux only
- first try to publish an extension