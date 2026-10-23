# Geo Realt

**Geo Realt** is a web-first workspace for real-estate professionals working in Georgia. It brings fresh listings from several local property sites into one searchable feed.

- Live app: [georealt.github.io](https://georealt.github.io/)
- Product and system overview: [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)
- Private backend source and operations guide: [georealt/backend](https://github.com/georealt/backend) (private)

The website is an installable Progressive Web App (PWA) designed for desktop and mobile browsers. A native iOS/Android package may be added later. The current backend uses SQLite on an Oracle Cloud virtual machine; Oracle Database is not used by this product.

## Repository contents

This public repository contains the static web app served by GitHub Pages. It does not contain API credentials, user passwords, database files, server private keys, or the backend implementation. Never add secrets or user data here.

The system overview describes the current product, connected sources, data flow, access model, notifications, known limits, and planned work. Operational secrets and private server configuration stay outside this public repository.
