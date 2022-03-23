---
title: Permission levels in DTR
description: Learn about the permission levels available in Docker Trusted Registry.
keywords: registry, security, permissions
---

Docker Trusted Registry allows you to define fine-grain permissions over image
repositories.

## Administrators

Users are shared across UCP and DTR. When you create a new user in Docker
Universal Control Plane, that user becomes available in DTR and vice versa.
When you create a trusted admin in DTR, the admin has permissions to manage:

* Users across UCP and DTR
* DTR repositories and settings
* UCP resources and settings

## Team permission levels

Teams allow you to define the permissions a set of user has for a set of
repositories. Three permission levels are available:

| Repository operation  | read | read-write | admin |
|:----------------------|:----:|:----------:|:-----:|
| View/ browse          |  x   |     x      |   x   |
| Pull                  |  x   |     x      |   x   |
| Push                  |      |     x      |   x   |
| Start a scan          |      |     x      |   x   |
| Delete tags           |      |     x      |   x   |
| Edit description      |      |            |   x   |
| Set public or private |      |            |   x   |
| Manage user access    |      |            |   x   |
| Delete repository     |      |            |   x   |

Team permissions are additive. When a user is a member of multiple teams, they
have the highest permission level defined by those teams.

## Overall permissions

Here's an overview of the permission levels available in DTR:

* Anonymous or unauthenticated Users: Can search and pull public repositories.
* Authenticated Users: Can search and pull public repos, and create and manage their own repositories.
* Team Member: Everything a user can do, plus the permissions granted by the team the user is a member of.
* Organization Owner: Can manage repositories and teams for the organization.
* Admin: Can manage anything across UCP and DTR.

## Where to go next

- [Authentication and authorization](index.md)
