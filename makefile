all: obsidian compress

clean:
	npm run clean

compile:
	compile-less -d obsidian/source/obsidian.less -o dist/obsidian.css
	compile-less -d roam/source/roam.less -o dist/roam.css

build: clean compile
	npm run build

obsidian: build
	npm run obsidian

compress:
	npm run compress