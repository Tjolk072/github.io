---
description: docker-compose build
keywords: fig, composition, compose, docker, orchestration, cli, build
title: docker-compose build
---

```
Usage: build [options] [SERVICE...]

Options:
--force-rm  Always remove intermediate containers.
--no-cache  Do not use cache when building the image.
--pull      Always attempt to pull a newer version of the image.
```

Services are built once and then tagged as `project_service`, e.g.,
`composetest_db`. If you change a service's Dockerfile or the contents of its
build directory, run `docker-compose build` to rebuild it.