| <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /> | WEB APP TEMPLATE |
| ------------------------------------------------------------------------------------------------------------- | ---------------- |

![main GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sripwoud/web-app-template/main.yml?branch=main&label=main)

| Feature                                        | With                                                                  | Configuration File                                                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Build tool                                     | [Vite](https://vite.dev/)                                             | [vite.config.ts](./web/vite.config.ts)                                                                                |
| Routing                                        | [@tanstack/react-router](https://tanstack.com/router/latest)          |                                                                                                                       |
| Form                                           | [@tanstack/react-form](https://tanstack.com/form/latest)              |                                                                                                                       |
| State management                               | [jotai](https://jotai.org/)                                           |                                                                                                                       |
| Runtime, tests runner                          | [Bun](https://bun.sh)                                                 | [bunfig.toml](./bunfig.toml)                                                                                          |
| Tasks runner, environment & runtime management | [mise](https://mise.dev/)                                             | [mise.toml](./mise.toml)                                                                                              |
| Typings                                        | [Typescript](https://www.typescriptlang.org/)                         | [tsconfig.json](./tsconfig.json)                                                                                      |
| Formatting                                     | [dprint](https://dprint.dev/)                                         | [.dprint.jsonc](./.biome.json)                                                                                        |
| Linting                                        | [Biome](https://biomejs.dev/)                                         | [.biome.jsonc](./.biome.jsonc)                                                                                        |
| Continuous Integration                         | [GitHub Workflow](https://docs.github.com/en/actions/using-workflows) | [.github/workflows](./.github/workflows)                                                                              |
| Import aliases                                 | [Typescript paths](https://www.typescriptlang.org/tsconfig#paths)     | [tsconfig.json](https://github.com/r1oga/ts-template/blob/5d6983a6d28429b9dd256edf40bad5ee48c33d9c/tsconfig.json#L26) |
| Git hooks management                           | [lefthook](https://github.com/evilmartians/lefthook/)                 | [.lefthook.yml](./.lefthook.yml)                                                                                      |
| Conventional Commits                           | [convco](https://github.com/convco/convco)                            | [.convco](./.convco)                                                                                                  |

## Develop

I use [`mise`](https://mise.jdx.dev) to manage runtimes, manage environment variables, and run tasks.\
To install it and setup the repository:

```commandline
./setup
```

To run tasks interactively:

```commandline
mise run
```
