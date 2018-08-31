ci: commitlint-ci lint type test
commitmsg: commitlint
prepublish: build
precommit: lint-staged type test

commitlint:
	./node_modules/.bin/commitlint -e ${GIT_PARAMS}
commitlint-ci:
	./node_modules/.bin/commitlint --from="${TRAVIS_BRANCH}" --to="${TRAVIS_COMMIT}"
	./node_modules/.bin/commitlint --from=${TRAVIS_COMMIT}
build:
	./node_modules/.bin/flow-remove-types -p src -i .test.js -d lib
lint:
	./node_modules/.bin/eslint .
lint-staged:
	./node_modules/.bin/lint-staged
test:
	./node_modules/.bin/jest
type:
	./node_modules/.bin/flow status
