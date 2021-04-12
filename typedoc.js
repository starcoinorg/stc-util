module.exports = {
  inputFiles: ['src/*.ts'],
  mode: 'library',
  out: 'docs',
  plugin: 'typedoc-plugin-markdown',
  readme: 'none',
  gitRevision: 'master',
  exclude: ['src/index.ts', 'test/*.ts'],
  excludeNotExported: true,
  excludePrivate: true,
  excludeProtected: true,
}
