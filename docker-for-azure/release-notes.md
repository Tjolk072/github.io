---
description: Release notes
keywords: azure, microsoft, iaas, tutorial
title: Docker for Azure Release Notes
---

{% include d4a_buttons.md %}

## Stable Channel

### 1.13.1-2 (stable)
Release date: 02/08/2017

{{azure_button_latest}}

**New**

- Docker Engine upgraded to [Docker 1.13.1](https://github.com/docker/docker/blob/master/CHANGELOG.md)

### 1.13.0-1
Release date: 1/18/2017

**New**

- Docker Engine upgraded to [Docker 1.13.0](https://github.com/docker/docker/blob/master/CHANGELOG.md)
- Writing to home directory no longer requires `sudo`
- Added support to perform fine grained monitoring of health status of swarm nodes, destroy unhealthy nodes and create replacement nodes
- Added support to scale the number of nodes in manager and worker vm scale sets through Azure UI/CLI for managing the number of nodes in a scale set
- Improved logging and remote diagnostics mechanisms for system containers

## Beta Channel

### 1.13.1-beta18
Release date: 02/16/2017

**New**

- Docker Engine upgraded to [Docker 1.13.1](https://github.com/docker/docker/blob/master/CHANGELOG.md)
- Added Swarm wide support for [persistent storage volumes](persistent-data-volumes.md)

### 1.13.0-beta12

Release date: 12/09/2016

**New**

- Docker Engine upgraded to [Docker 1.13.0-rc2](https://github.com/docker/docker/blob/master/CHANGELOG.md)
- SSH access has been added to the worker nodes
- The Docker daemon no longer listens on port 2375
- Added a `swarm-exec` to execute a docker command across all of the swarm nodes. See [Executing Docker commands in all swarm nodes](deploy.md#execute-docker-commands-in-all-swarm-nodes) for more details.

### 1.12.3-beta10

Release date: 11/08/2016

**New**

- Docker Engine upgraded to Docker 1.12.3
- Fixed the shell container that runs on the managers, to remove a ssh host key that was accidentally added to the image.
This could have led to a potential man in the middle (MITM) attack. The ssh host key is now generated on host startup, so that each host has its own key.
- The SSH ELB for connecting to the managers using SSH has been removed because it is no longer possible to SSH into the managers without getting a security warning
- Multiple managers can be deployed
- All container logs can be found in the `xxxxlog` storage account
- You can connect to each manager using SSH by following our deploy [guide](deploy.md)

### 1.12.2-beta9

Release date: 10/17/2016

**New**

- Docker Engine upgraded to Docker 1.12.2
- Manager behind its own LB
- Added sudo support to the shell container on manager nodes

### 1.12.1-beta5

Release date: 8/19/2016

**New**

 * Docker Engine upgraded to 1.12.1

### Errata

 * To assist with debugging, the Docker Engine API is available internally in the Azure VPC on TCP port 2375. These ports cannot be accessed from outside the cluster, but could be used from within the cluster to obtain privileged access on other cluster nodes. In future releases, direct remote access to the Docker API will not be available.

### 1.12.0-beta4

Release date: 8/9/2016

**New**

 * First release

### Errata

 * To assist with debugging, the Docker Engine API is available internally in the Azure VPC on TCP port 2375. These ports cannot be accessed from outside the cluster, but could be used from within the cluster to obtain privileged access on other cluster nodes. In future releases, direct remote access to the Docker API will not be available.
