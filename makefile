install: #command install
	npm ci
brain-games: #run game brain-games
	node bin/brain-games.js
publish: #publish in npmjs.com
	npm publish --dry-run
