build:
	cd server && $(MAKE) build
	cd client && $(MAKE) build

run:
	docker compose up

install:
	cd server && npm install
	cd client && npm install