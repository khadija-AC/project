// husky.config.js
module.exports = {
  hooks: {
    'commit-msg':
      'test "$(git log -1 --pretty=%B)" != "fix: correct code style issues with ESLint" && commitlint -E HUSKY_GIT_PARAMS || true',
  },
}
