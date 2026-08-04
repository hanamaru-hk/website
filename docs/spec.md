# Website Spec

## Overview

This document describes the preliminary requirements and technical plan for the Hanamaru website.

## Requirements

### Hosting

- Host the website on a VPS running Ubuntu.
- Serve via Nginx as the reverse proxy / web server.
- Deploy automatically via GitHub Actions.

### Frontend

- Built with Vue.js and Naive UI.

### UI

- Upper menu with Home, Services, and Contact links.
- Menu collapses into a hamburger menu on mobile.
- Shared background across all pages using Vanta.js, rendered as a non-scrolling underlay.

### Pages

- **Home**: Displays the site slogan.
- **Services**: Lists software vendor services.
- **Contact**: Same as the Hanamaru contact page.

## Open Questions

- Hosting provider and server setup — TBD.
- Project scaffolding and package manager — TBD.
