---
title: Use layer 7 routing labels
description: Learn about the labels you can use in your swarm services to route
  layer 7 traffic.
redirect_from:
  - /ee/ucp/interlock/config/service-labels/
keywords: routing, proxy, interlock, load balancing
---

>{% include enterprise_label_shortform.md %}

After you enable the layer 7 routing solution, you can
[start using it in your swarm services](index.md).

Service labels define hostnames that are routed to the
service, the applicable ports, and other routing configurations. Applications that publish using Interlock use service labels to configure how they are published.

When you deploy or update a swarm service with service labels, the following actions occur:

1. The `ucp-interlock` service monitors the Docker API for events and
publishes the events to the `ucp-interlock-extension` service.
2. That service then generates a new configuration for the proxy service,
based on the labels you added to your services.
3. The `ucp-interlock` service takes the new configuration and reconfigures the
`ucp-interlock-proxy` to start using the new configuration.

The previous steps occur in milliseconds and with rolling updates. Even though
services are being reconfigured, users won't notice it.

## Service label options

| Label                                  | Description                                                                                                                                    | Example                |
|:---------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| `com.docker.lb.hosts`                  | Comma separated list of the hosts that the service should serve.                                                                               | `example.com,test.com` |
| `com.docker.lb.port`                   | Port to use for internal upstream communication.                                                                                               | `8080`                 |
| `com.docker.lb.network`                | Name of network the proxy service should attach to for upstream connectivity.                                                                  | `app-network-a`        |
| `com.docker.lb.context_root`           | Context or path to use for the application.                                                                                                    | `/app`                 |
| `com.docker.lb.context_root_rewrite`   | When set to `true`, this option changes the path from the value of label `com.docker.lb.context_root` to `/`.                                                                                                | `true`                 |
| `com.docker.lb.ssl_cert`               | Docker secret to use for the SSL certificate.                                                                                                  | `example.com.cert`     |
| `com.docker.lb.ssl_key`                | Docker secret to use for the SSL key.                                                                                                          | `example.com.key`      |
| `com.docker.lb.websocket_endpoints`    | Comma separated list of endpoints to configure to be upgraded for websockets.                                                                  | `/ws,/foo`             |
| `com.docker.lb.service_cluster`        | Name of the service cluster to use for the application.                                                                                        | `us-east`              |
| `com.docker.lb.sticky_session_cookie`  | Cookie to use for sticky sessions.                                                                                                             | `app_session`          |
| `com.docker.lb.redirects`              | Semi-colon separated list of redirects to add in the format of `<source>,<target>`.                                                            | `http://old.example.com,http://new.example.com;` |
| `com.docker.lb.ssl_passthrough`        | Enable SSL passthrough.                                                                                                                        | `false`                |
| `com.docker.lb.backend_mode`           | Select the backend mode that the proxy should use to access the upstreams. Defaults to `task`.                                                 | `vip`                  |
