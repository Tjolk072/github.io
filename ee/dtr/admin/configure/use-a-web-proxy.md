---
title: Use a web proxy
description: Learn how to configure Docker Content Trust to use a web proxy to
  reach external services.
keywords: dtr, configure, http, proxy
---

>{% include enterprise_label_shortform.md %}

Docker Trusted Registry makes outgoing connections to check for new versions,
automatically renew its license, and update its vulnerability database.
If DTR can't access the internet, then you'll have to manually apply updates.

One option to keep your environment secure while still allowing DTR access to
the internet is to use a web proxy. If you have an HTTP or HTTPS proxy, you
can configure DTR to use it. To avoid downtime you should do this configuration
outside business peak hours.

As an administrator, log into a node where DTR is deployed, and run:

```bash
docker run -it --rm \
  {{ page.dtr_org }}/{{ page.dtr_repo }}:{{ page.dtr_version }} reconfigure \
  --http-proxy http://<domain>:<port> \
  --https-proxy https://<doman>:<port> \
  --ucp-insecure-tls
```

To confirm how DTR is configured, check the **Settings** page on the web UI.

![DTR settings](../../images/use-a-web-proxy-1.png){: .with-border}

If by chance the web proxy requires authentication you can submit the username
and password, in the command, as shown below: 

```bash
docker run -it --rm \
  {{ page.dtr_org }}/{{ page.dtr_repo }}:{{ page.dtr_version }} reconfigure \
  --http-proxy username:password@<domain>:<port> \
  --https-proxy username:password@<doman>:<port> \
  --ucp-insecure-tls
```

> **Note**: DTR will hide the password portion of the URL, when it is displayed in the DTR UI.

## Where to go next

- [Configure garbage collection](garbage-collection.md)
