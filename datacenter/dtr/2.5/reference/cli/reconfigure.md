---
title: docker/dtr reconfigure
description: Change DTR configurations
keywords: dtr, cli, reconfigure
redirect_from:
 - /reference/dtr/2.5/cli/reconfigure/
---

Change DTR configurations

## Usage

```bash
docker run -it --rm docker/dtr \
    reconfigure [command options]
```

## Description


This command changes DTR configuration settings.

DTR is restarted for the new configurations to take effect. To have no down
time, configure your DTR for high availability.


## Options

| Option                        | Environment Variable      | Description                                                                          |
|:------------------------------|:--------------------------|:-------------------------------------------------------------------------------------|
| `--debug` | $DEBUG | Enable debug mode for additional logs. |
| `--dtr-ca` | $DTR_CA | Use a PEM-encoded TLS CA certificate for DTR. By default DTR generates a self-signed TLS certificate during deployment. You can use your own root CA public certificate with `--dtr-ca "$(cat ca.pem)"`. |
| `--dtr-cert` | $DTR_CERT | Use a PEM-encoded TLS certificate for DTR. By default DTR generates a self-signed TLS certificate during deployment. You can use your own public key certificate with `--dtr-cert "$(cat cert.pem)"`. If the certificate has been signed by an intermediate certificate authority, append its public key certificate at the end of the file to establish a chain of trust. |
| `--dtr-external-url` | $DTR_EXTERNAL_URL | URL of the host or load balancer clients use to reach DTR. When you use this flag, users are redirected to UCP for logging in. Once authenticated  they are redirected to the url you specify in this flag. If you don't use this flag, DTR  is deployed without single sign-on with UCP. Users and teams are shared but users login  separately into the two applications. You can enable and disable single sign-on in the DTR  settings. Format `https://host[:port]`, where port is the value you used  with `--replica-https-port`. |
| `--dtr-key` | $DTR_KEY | Use a PEM-encoded TLS private key for DTR. By default DTR generates a self-signed TLS certificate during deployment. You can use your  own TLS private key with `--dtr-key "$(cat ca.pem)"`. |
| `--dtr-key` | $DTR_KEY | Use a PEM-encoded TLS private key for DTR. By default DTR generates a self-signed TLS certificate during deployment. You can use your own TLS private key with `--dtr-key "$(cat key.pem)"`. |
| `--dtr-storage-volume` | $DTR_STORAGE_VOLUME | Customize the volume to store Docker images. By default DTR creates a volume to store the Docker images in the local  filesystem of the node where DTR is running, without high-availability. Use this flag to  specify a full path or volume name for DTR to store images. For high-availability, make  sure all DTR replicas can read and write data on this volume. If you're using NFS, use `--nfs-storage-url` instead. |
| `--enable-pprof` | $DTR_PPROF | Enables pprof profiling of the server. Use `--enable-pprof=false` to disable it. Once DTR is deployed with this flag, you can access the pprof endpoint for the api server  at `/debug/pprof`, and the registry endpoint at `/registry_debug_pprof/debug/pprof`. |
| `--existing-replica-id` | $DTR_REPLICA_ID | The ID of an existing DTR replica. To add, remove or modify DTR, you must connect to an existing healthy replica's database. |
| `--help-extended` | $DTR_EXTENDED_HELP | Display extended help text for a given command. |
| `--http-proxy` | $DTR_HTTP_PROXY | The HTTP proxy used for outgoing requests. |
| `--https-proxy` | $DTR_HTTPS_PROXY | The HTTPS proxy used for outgoing requests. |
| `--log-host` | $LOG_HOST | The syslog system to send logs to. The endpoint to send logs to. Use this flag if you set `--log-protocol` to `tcp` or `udp`. |
| `--log-level` | $LOG_LEVEL | Log level for all container logs when logging to syslog. Default: INFO. The supported log levels are `debug`, `info`, `warn`, `error`, or `fatal`. |
| `--log-protocol` | $LOG_PROTOCOL | The protocol for sending logs. Default is internal. By default, DTR internal components log information using the logger specified in the Docker daemon in the node where the DTR replica is deployed.   Use this option to send DTR logs to an external syslog system. The supported values are `tcp`, `udp`, and `internal`. Internal is the default option, stopping DTR from sending logs to an external system. Use this flag with `--log-host`. |
| `--nfs-storage-url` | $NFS_STORAGE_URL | NFS to store Docker images. Format `nfs://<ip|hostname>/<mountpoint>`. By default DTR creates a volume to store the Docker images in the local filesystem  of the node where DTR is running, without high-availability. Use this flag to specify an  NFS mount for DTR to store images, using the format `nfs://<ip|hostname>/<mountpoint>`. To  use this flag, you need to install an NFS client library like **nfs-common** in the node where you're deploying DTR. You can test this by running `showmount -e <nfs-server>`. When  you join new replicas, they will start using NFS so you don't need to use this flag. To  reconfigure DTR to stop using NFS, leave this option empty: `--nfs-storage-url ""` |
| `--no-proxy` | $DTR_NO_PROXY | List of domains the proxy should not be used for. When using `--http-proxy` you can use this flag to specify a list  of domains that you don't want to route through the proxy. Format `acme.com[, acme.org]`. |
| `--replica-http-port` | $REPLICA_HTTP_PORT | The public HTTP port for the DTR replica. Default is `80`. This allows you to customize the HTTP port where users can reach DTR. Once users access  the HTTP port, they are redirected to use an HTTPS connection, using the port specified  with --replica-https-port. This port can also be used for unencrypted health checks. |
| `--replica-https-port` | $REPLICA_HTTPS_PORT | The public HTTPS port for the DTR replica. Default is `443`. This allows you to customize the HTTPS port where users can reach DTR. Each replica can  use a different port. |
| `--replica-rethinkdb-cache-mb` | $RETHINKDB_CACHE_MB | The maximum amount of space in MB for RethinkDB in-memory cache used by the given replica. Default is auto. Auto is `(available_memory - 1024) / 2`. This config allows changing the RethinkDB cache usage per replica. You need to run it once per replica to change each one. |
| `--ucp-ca` | $UCP_CA | Use a PEM-encoded TLS CA certificate for UCP. Download the UCP TLS CA certificate from `https://<ucp-url>/ca`, and  use `--ucp-ca "$(cat ca.pem)"`. |
| `--ucp-insecure-tls` | $UCP_INSECURE_TLS | Disable TLS verification for UCP. The installation uses TLS but always trusts the TLS certificate used by UCP, which can lead to MITM (man-in-the-middle) attacks.  For production deployments, use `--ucp-ca "$(cat ca.pem)"` instead. |
| `--ucp-password` | $UCP_PASSWORD | The UCP administrator password. |
| `--ucp-url` | $UCP_URL | The UCP URL including domain and port. |
| `--ucp-username` | $UCP_USERNAME | The UCP administrator username. |

