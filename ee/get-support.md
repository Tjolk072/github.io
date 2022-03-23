---
title: Get support
description: Your Docker Enterprise subscription gives you access to prioritized support. You can file tickets via email or the support portal.
keywords: support, help
---

>{% include enterprise_label_shortform.md %}

Your Docker Enterprise subscription gives you access to prioritized
support. The service levels depend on your subscription.

Before reaching out to Docker Support, make sure you're listed as an authorized
support contact for your account. If you're not listed as an authorized
support contact, find a person who is, and ask them to open a case with
Docker Support in your behalf.

You can open a new support case at the [Docker support page](https://support.docker.com/).
If you're unable to submit a new case using the support page, fill in the
[Docker account support form](https://success.docker.com/support) using your
company email address.

Docker Support engineers may ask you to provide a UCP support dump, which is an
archive that contains UCP system logs and diagnostic information. If a node is not joined to the cluster and healthy, the support dump from the web UI will not contain logs from the unhealthy node. For unhealthy nodes use the CLI to get a support dump.

## Use the Web UI to get a support dump

To get the support dump from the Web UI:

1. Log into the UCP web UI with an administrator account.
2. In the top-left menu, click your username and choose
   **Support Dump**. It may take a few minutes for the download to complete.

![](images/get-support-1.png){: .with-border}

## Use the CLI to get a support dump

To get the support dump from the CLI, use SSH to log into a node and run:

```bash
UCP_VERSION=$((docker container inspect ucp-proxy --format {% raw %}'{{index .Config.Labels "com.docker.ucp.version"}}'{% endraw %} 2>/dev/null || echo -n {{ page.ucp_version  }})|tr -d [[:space:]])
docker container run --rm \
  --name ucp \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --log-driver none \
  {{ page.ucp_org }}/{{ page.ucp_repo }}:${UCP_VERSION} \
  support > \
  docker-support-${HOSTNAME}-$(date +%Y%m%d-%H_%M_%S).tgz
```

This support dump only contains logs for the node where you're running the
command. If your UCP is highly available, you should collect support dumps
from all of the manager nodes.

## Use PowerShell to get a support dump

On Windows worker nodes, run the following command to generate a local support dump:

```powershell
docker container run --name windowssupport -v 'C:\ProgramData\docker\daemoncerts:C:\ProgramData\docker\daemoncerts' -v 'C:\Windows\system32\winevt\logs:C:\eventlogs:ro' {{ page.ucp_org }}/ucp-dsinfo-win:{{ page.ucp_version }}; docker cp windowssupport:'C:\dsinfo' .; docker rm -f windowssupport
```

This command creates a directory named `dsinfo` in your current directory.
If you want an archive file, you need to create it from the `dsinfo` directory.

