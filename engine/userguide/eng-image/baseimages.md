---
description: How to create base images
keywords: Examples, Usage, base image, docker, documentation,  examples
redirect_from:
- /engine/articles/baseimages/
title: Create a base image
---

So you want to create your own [*Base Image*](../../reference/glossary.md#base-image)? Great!

The specific process will depend heavily on the Linux distribution you
want to package. We have some examples below, and you are encouraged to
submit pull requests to contribute new ones.

## Create a full image using tar

In general, you'll want to start with a working machine that is running
the distribution you'd like to package as a base image, though that is
not required for some tools like Debian's
[Debootstrap](https://wiki.debian.org/Debootstrap), which you can also
use to build Ubuntu images.

It can be as simple as this to create an Ubuntu base image:

    $ sudo debootstrap raring raring > /dev/null
    $ sudo tar -C raring -c . | docker import - raring

    a29c15f1bf7a

    $ docker run raring cat /etc/lsb-release

    DISTRIB_ID=Ubuntu
    DISTRIB_RELEASE=13.04
    DISTRIB_CODENAME=raring
    DISTRIB_DESCRIPTION="Ubuntu 13.04"

There are more example scripts for creating base images in the Docker
GitHub Repo:

 - [BusyBox](https://github.com/moby/moby/blob/master/contrib/mkimage-busybox.sh)
 - CentOS / Scientific Linux CERN (SLC) [on Debian/Ubuntu](
   https://github.com/moby/moby/blob/master/contrib/mkimage-rinse.sh) or
   [on CentOS/RHEL/SLC/etc.](
   https://github.com/moby/moby/blob/master/contrib/mkimage-yum.sh)
 - [Debian / Ubuntu](
   https://github.com/moby/moby/blob/master/contrib/mkimage-debootstrap.sh)

## Creating a simple base image using scratch

You can use Docker's reserved, minimal image, `scratch`, as a starting point for building containers. Using the `scratch` "image" signals to the build process that you want the next command in the `Dockerfile` to be the first filesystem layer in your image.

While `scratch` appears in Docker's repository on the hub, you can't pull it, run it, or tag any image with the name `scratch`. Instead, you can refer to it in your `Dockerfile`. For example, to create a minimal container using `scratch`:

    FROM scratch
    ADD hello /
    CMD ["/hello"]

Assuming you built the "hello" executable example [from the Docker GitHub example C-source code](https://github.com/docker-library/hello-world/blob/master/hello.c), and you compiled it with the `-static` flag, you can then build this Docker image using: `docker build --tag hello .`  

NOTE: Because Docker for Mac and Docker for Windows use a Linux VM, you must compile this code using a Linux toolchain to end up with a Linux binary. Not to worry, you can quickly pull down a Linux image and a build environment and build within it:

    $ docker run --rm -it -v $PWD:/build ubuntu:16.04
    container# apt-get update && apt-get install build-essential
    container# cd /build
    container# gcc -o hello -static -nostartfiles hello.c

Then you can run it (on Linux, Mac, or Windows) using: `docker run --rm hello`

This example creates the hello-world image used in the tutorials.
If you want to test it out, you can clone [the image repo](https://github.com/docker-library/hello-world).


## More resources

There are lots more resources available to help you write your `Dockerfile`.

* There's a [complete guide to all the instructions](../../reference/builder.md) available for use in a `Dockerfile` in the reference section.
* To help you write a clear, readable, maintainable `Dockerfile`, we've also
written a [`Dockerfile` best practices guide](dockerfile_best-practices.md).
* If your goal is to create a new Official Repository, be sure to read up on Docker's [Official Repositories](/docker-hub/official_repos/).
