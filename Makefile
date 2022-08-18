install: install-deps
	npx simple-git-hooks

install-deps:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	./bin/gendiff.js

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8
