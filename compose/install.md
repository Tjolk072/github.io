---
description: How to install Docker Compose
keywords: compose, orchestration, install, installation, docker, documentation
title: Install Docker Compose
---

You can run Compose on macOS, Windows and 64-bit Linux. To install it, you'll need to install Docker first.

To install Compose, do the following:

1.  Install Docker Engine:

    * [macOS installation](/docker-for-mac/index.md){: target="_blank" class="_"}

    * [Windows installation](/docker-for-windows/index.md){: target="_blank" class="_"}

    * [Ubuntu installation](/engine/installation/linux/ubuntu.md){: target="_blank" class="_"}

    * [Other systems](/engine/installation/index.md){: target="_blank" class="_"}

2.  The Docker Toolbox installation includes both Engine and Compose, so Mac and
    Windows users are done installing. Others should continue to the next step.

3.  Go to the
    [Compose repository release page on GitHub](https://github.com/docker/compose/releases){: target="_blank" class="_"}.

4.  Follow the instructions from the release page and run the `curl` command,
    which the release page specifies, in your terminal.

    > Note: If you get a "Permission denied" error, your `/usr/local/bin` directory
    > probably isn't writable and you'll need to install Compose as the superuser. Run
    > `sudo -i`, then the two commands below, then `exit`.

    The following is an example command illustrating the format:

    ```bash
    $ curl -L "https://github.com/docker/compose/releases/download/1.11.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    ```

    If you have problems installing with `curl`, see
    [Alternative Install Options](install.md#alternative-install-options).

5.  Apply executable permissions to the binary:

    ```bash
    $ chmod +x /usr/local/bin/docker-compose
    ```

6.  Optionally, install [command completion](completion.md) for the
    `bash` and `zsh` shell.

7.  Test the installation.

    ```bash
    $ docker-compose --version

    docker-compose version: 1.11.1
    ```

## Alternative install options

### Install using pip

Compose can be installed from [pypi](https://pypi.python.org/pypi/docker-compose)
using `pip`.  If you install using `pip` it is highly recommended that you use a
[virtualenv](https://virtualenv.pypa.io/en/latest/) because many operating systems
have python system packages that conflict with docker-compose dependencies. See
the [virtualenv tutorial](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
to get started.

```bash
$ pip install docker-compose
```

> **Note:** pip version 6.0 or greater is required

### Install as a container

Compose can also be run inside a container, from a small bash script wrapper.
To install compose as a container run:

```bash
$ curl -L https://github.com/docker/compose/releases/download/1.11.1/run.sh > /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
```

## Master builds

If you're interested in trying out a pre-release build you can download a
binary from
[https://dl.bintray.com/docker-compose/master/](https://dl.bintray.com/docker-compose/master/).
Pre-release builds allow you to try out new features before they are released,
but may be less stable.


## Upgrading

If you're upgrading from Compose 1.2 or earlier, you'll need to remove or migrate
your existing containers after upgrading Compose. This is because, as of version
1.3, Compose uses Docker labels to keep track of containers, and so they need to
be recreated with labels added.

If Compose detects containers that were created without labels, it will refuse
to run so that you don't end up with two sets of them. If you want to keep using
your existing containers (for example, because they have data volumes you want
to preserve) you can use compose 1.5.x to migrate them with the following command:

```bash
$ docker-compose migrate-to-labels
```

Alternatively, if you're not worried about keeping them, you can remove them.
Compose will just create new ones.

```bash
docker rm -f -v myapp_web_1 myapp_db_1 ...
```

## Uninstallation

To uninstall Docker Compose if you installed using `curl`:

```bash
rm /usr/local/bin/docker-compose
```

To uninstall Docker Compose if you installed using `pip`:

```bash
$ pip uninstall docker-compose
```

> **Note**: If you get a "Permission denied" error using either of the above
> methods, you probably do not have the proper permissions to remove
> `docker-compose`.  To force the removal, prepend `sudo` to either of the above
> >commands and run again.


## Where to go next

- [User guide](index.md)
- [Getting Started](gettingstarted.md)
- [Get started with Django](django.md)
- [Get started with Rails](rails.md)
- [Get started with WordPress](wordpress.md)
- [Command line reference](/compose/reference/index.md)
- [Compose file reference](compose-file.md)
