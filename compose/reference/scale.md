---
description: Sets the number of containers to run for a service.
keywords: fig, composition, compose, docker, orchestration, cli,  scale
title: docker-compose scale
---

```
Usage: scale [SERVICE=NUM...]
```

Sets the number of containers to run for a service.

Numbers are specified as arguments in the form `service=num`. For example:

    docker-compose scale web=2 worker=3
