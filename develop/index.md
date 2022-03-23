---
title: Develop with Docker
description: Overview of developer resources
keywords: developer, developing, apps, api, sdk
---

This page contains a list of resources for application developers who would like to build new applications using Docker.

## Prerequisites

Work through the learning modules in [Get started](../get-started/index.md) to understand how to build an image and run it as a containerized application.

## Develop new apps on Docker

If you're just getting started developing a brand new app on Docker, check out
these resources to understand some of the most common patterns for getting the
most benefits from Docker.

- Use [multi-stage builds](develop-images/multistage-build.md){: target="_blank" class="_"} to keep your images lean
- Manage application data using [volumes](../storage/volumes.md) and [bind mounts](../storage/bind-mounts.md){: target="_blank" class="_"}
- [Scale your app with Kubernetes](../get-started/kube-deploy.md){: target="_blank" class="_"} 
- [Scale your app as a Swarm service](../get-started/swarm-deploy.md){: target="_blank" class="_"} 
- [General application development best practices](dev-best-practices.md){: target="_blank" class="_"}

## Learn about language-specific app development with Docker

- [Docker for Java developers lab](https://github.com/docker/labs/tree/master/developer-tools/java/){: target="_blank" class="_"} 
- [Port a node.js app to Docker lab](https://github.com/docker/labs/tree/master/developer-tools/nodejs/porting){: target="_blank" class="_"}
- [Ruby on Rails app on Docker](https://github.com/docker/labs/tree/master/developer-tools/ruby){: target="_blank" class="_"} lab
- [Dockerize a .Net Core application](../engine/examples/dotnetcore.md){: target="_blank" class="_"}
- [Dockerize an ASP.NET Core application with SQL Server on Linux](../compose/aspnet-mssql-compose.md){: target="_blank" class="_"} using Docker Compose

## Advanced development with the SDK or API

After you can write Dockerfiles or Compose files and use Docker CLI, take it to the next level by using Docker Engine SDK for Go/Python or use the HTTP API directly.
