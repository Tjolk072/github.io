---
title: Monitor the cluster status
description: Monitor your Docker Universal Control Plane installation, and learn how to troubleshoot it.
keywords: UCP, troubleshoot, health, cluster
---

You can monitor the status of UCP by using the web UI or the CLI.
You can also use the `_ping` endpoint to build monitoring automation.

The first place to check the status of UCP is the UCP web UI, since it
shows warnings for situations that require your immediate attention.
Administrators might see more warnings than regular users.

![UCP dashboard](../../images/monitor-ucp-0.png){: .with-border}

You can also navigate to the **Nodes** page, to see if all the nodes
managed by UCP are healthy or not.

![UCP dashboard](../../images/monitor-ucp-1.png){: .with-border}

Each node has a status message explaining any problems with the node.
In this example, a Windows worker node is down.
[Learn more about node status](troubleshoot-node-messages.md).
Click the node to get more info on its status. In the details pane, click
**Actions** and select **Agent logs** to see the log entries from the
node.

## Use the CLI to monitor the status of a cluster

You can also monitor the status of a UCP cluster using the Docker CLI client.
Download [a UCP client certificate bundle](../../user-access/cli.md)
and then run:

```bash
docker node ls
```

As a rule of thumb, if the status message starts with `[Pending]`, then the
current state is transient and the node is expected to correct itself back
into a healthy state. [Learn more about node status](troubleshoot-node-messages.md).

## Monitoring automation

You can use the `https://<ucp-manager-url>/_ping` endpoint to check the health
of a single UCP manager node. When you access this endpoint, the UCP manager
validates that all its internal components are working, and returns one of the
following HTTP error codes:

* 200, if all components are healthy
* 500, if one or more components are not healthy

If an administrator client certificate is used as a TLS client certificate for
the `_ping` endpoint, a detailed error message is returned if any component is
unhealthy.

If you're accessing the `_ping` endpoint through a load balancer, you'll have no
way of knowing which UCP manager node is not healthy, since any manager node
might be serving your request. Make sure you're connecting directly to the
URL of a manager node, and not a load balancer. In addition, please be aware that
pinging the endpoint with HEAD will result in a 404 error code. It is better to
use GET instead.

## Monitoring vulnerability counts

For those implementations with an EE Advanced subscription, UCP displays image 
vulnerability count data from the DTR image scanning feature. UCP  displays 
vulnerability counts for containers, Swarm services, pods, and images.

To enable this feature, DTR 2.6 is required and single sign-on with UCP must be enabled.

![example of vulnerability information in UCP](../../images/example-of-vuln-data-in-ucp.png)

## Monitoring disk usage

Web UI disk usage metrics, including free space, only reflect the Docker managed portion of the filesystem: `/var/lib/docker`. To monitor the total space available on each filesystem of a UCP worker or manager, you must deploy a third party monitoring solution to monitor the operating system.

## Where to go next

- [Troubleshoot with logs](troubleshoot-with-logs.md)
- [Troubleshoot node states](troubleshoot-node-messages.md)
