---
description: Change log / release notes per release
keywords: pinata, alpha, tutorial
redirect_from:
- /mackit/release-notes/
title: Docker for Mac release notes
---

Here are the main improvements and issues per release, starting with the current release. The documentation is always updated for each release.

For system requirements, please see the Getting Started topic on [What to know before you install](index.md#what-to-know-before-you-install).

Release notes for _stable_ and _beta_ releases are listed below. You can learn about both kinds of releases, and download stable and beta product installers at [Download Docker for Mac](index.md#download-docker-for-mac).

* [Stable Release Notes](release-notes.md#stable-release-notes)
* [Beta Release Notes](release-notes.md#beta-release-notes)

## Stable Release Notes

### Docker for Mac 1.12.5, 2016-12-20 (stable)

**Upgrades**

- Docker 1.12.5
- Docker Compose 1.9.0

### Skipped Docker for Mac 1.12.4 (stable)

We did not distribute a 1.12.4 stable release

### Docker for Mac 1.12.3, 2016-11-09 (stable)

**Upgrades**

- Docker 1.12.3
- Linux Kernel 4.4.27
- Notary 0.4.2
- Docker Machine 0.8.2
- Docker Compose 1.8.1
- Kernel vsock driver v7
- aufs 20160912

**Bug fixes and minor changes**

**General**

- Fixed an issue where the whale animation during setting change was inconsistent

- Fixed an issue where some windows stayed hidden behind another app

- Fixed an issue where the Docker status would continue to be yellow/animated after the VM had started correctly

- Fixed an issue where Docker for Mac was incorrectly reported as updated

- Channel is now displayed in About box

- Crash reports are sent over Bugsnag rather than HockeyApp

- Fixed an issue where some windows did not claim focus correctly

- Added UI when switching channel to prevent user losing containers and settings

- Check disk capacity before Toolbox import

- Import certificates in `etc/ssl/certs/ca-certificates.crt`

- disk: make the "flush" behaviour configurable for database-like workloads. This works around a performance regression in 1.12.1.

**Networking**

- Proxy: Fixed application of system or custom proxy settings over container restart

- DNS: reduce the number of UDP sockets consumed on the host

- VPNkit: improve the connection-limiting code to avoid running out of sockets on the host

- UDP: handle diagrams bigger than 2035, up to the configured macOS kernel limit

- UDP: make the forwarding more robust; drop packets and continue rather than stopping

**File sharing**

- osxfs: Fixed the prohibition of chown on read-only or mode 0 files, (fixes
  [https://github.com/docker/for-mac/issues/117](https://github.com/docker/for-mac/issues/117),
  [https://github.com/docker/for-mac/issues/263](https://github.com/docker/for-mac/issues/263),
  [https://github.com/docker/for-mac/issues/633](https://github.com/docker/for-mac/issues/633))

- osxfs: Fixed race causing some reads to run forever

- osxfs: Fixed a simultaneous volume mount race which can result in a crash

**Moby**

- Increase default ulimit for memlock (fixes [https://github.com/docker/for-mac/issues/801](https://github.com/docker/for-mac/issues/801))

### Docker for Mac 1.12.1, 2016-09-16 (stable)

**New**

* Support for macOS 10.12 Sierra

**Upgrades**

* Docker 1.12.1
* Docker machine 0.8.1
* Linux kernel 4.4.20
* aufs 20160905

**Bug fixes and minor changes**

**General**

 * Fixed communications glitch when UI talks to com.docker.vmnetd
 Fixes [https://github.com/docker/for-mac/issues/90](https://github.com/docker/for-mac/issues/90)

 * `docker-diagnose`: display and record the time the diagnosis was captured

 * Don't compute the container folder in `com.docker.vmnetd`
   Fixes [https://github.com/docker/for-mac/issues/47](https://github.com/docker/for-mac/issues/47)

 * Warn the user if BlueStacks is installed (potential kernel panic)

 * Automatic update interval changed from 1 hour to 24 hours

 * Include Zsh completions

 * UI Fixes

**Networking**

* VPNKit supports search domains

* slirp: support up to 8 external DNS servers

* slirp: reduce the number of sockets used by UDP NAT, reduce the probability that NAT rules will time out earlier than expected

* Entries from `/etc/hosts` should now resolve from within containers

* Allow ports to be bound on host addresses other than `0.0.0.0` and `127.0.0.1`
  Fixes issue reported in [https://github.com/docker/for-mac/issues/68](https://github.com/docker/for-mac/issues/68)

* Use Mac System Configuration database to detect DNS

**File sharing (osxfs)**

* Fixed thread leak

* Fixed a malfunction of new directories that have the same name as an old directory that is still open

* Rename events now trigger DELETE and/or MODIFY `inotify` events (saving with TextEdit works now)

* Fixed an issue that caused `inotify` failure and crashes

* Fixed a directory file descriptor leak

* Fixed socket `chowns`

**Moby**

* Use default `sysfs` settings, transparent huge pages disabled

* `cgroup` mount to support `systemd` in containers

* Increase Moby `fs.file-max` to 524288

* Fixed Moby Diagnostics and Update Kernel

**HyperKit**

* HyperKit updated with `dtrace` support and lock fixes

### Docker for Mac 2016-08-11 1.12.0-a (stable)

This bug fix release contains osxfs improvements. The fixed issues may have
been seen as failures with apt-get and npm in containers, missed inotify
events or unexpected unmounts.

**Bug fixes**

* osxfs: fixed an issue causing access to children of renamed directories to fail (symptoms: npm failures, apt-get failures)

* osxfs: fixed an issue causing some ATTRIB and CREATE inotify events to fail delivery and other inotify events to stop

* osxfs: fixed an issue causing all inotify events to stop when an ancestor directory of a mounted directory was mounted

* osxfs: fixed an issue causing volumes mounted under other mounts to spontaneously unmount

### Docker for Mac 1.12.0-a, 2016-08-03 (stable)

This bug fix release contains osxfs improvements. The fixed issues may have
been seen as failures with apt-get and npm in containers, missed `inotify`
events or unexpected unmounts.

**Hotfixes**

* osxfs: fixed an issue causing access to children of renamed directories to fail (symptoms: npm failures, apt-get failures) (docker/for-mac)

* osxfs: fixed an issue causing some ATTRIB and CREATE `inotify` events to fail delivery and other `inotify` events to stop

* osxfs: fixed an issue causing all `inotify` events to stop when an ancestor directory of a mounted directory was mounted

* osxfs: fixed an issue causing volumes mounted under other mounts to spontaneously unmount

### Docker for Mac 1.12.0, 2016-07-28 (stable)

* First stable release

**Components**

* Docker 1.12.0
* Docker Machine 0.8.0
* Docker Compose 1.8.0

## Beta Release Notes

### Beta 36 Release Notes (2017-01-12 1.13.0-rc6-beta36)

>**Important Note:** Plugins installed using the experimental "managed plugins" feature in Docker 1.12 must be removed/uninstalled before upgrading.

**Upgrades**

- Docker 1.13.0-rc6
- Docker Compose 1.10-rc2
- Linux Kernel 4.9.2

**Bug fixes and minor improvements**

- Uninstall should be more reliable

### Beta 35 Release Notes (2017-01-06 1.13.0-rc5-beta35)

>**Important Note:** Plugins installed using the experimental "managed plugins" feature in Docker 1.12 must be removed/uninstalled before upgrading.

**Upgrades**

- Docker 1.13.0-rc5
- Docker Compose 1.10-rc1

### Beta 34.1 Release Notes (2016-12-22 1.13.0-rc4-beta34.1)

>**Important Note:** Plugins installed using the experimental "managed plugins" feature in Docker 1.12 must be removed/uninstalled before upgrading.

**Hotfix**

- Fixed issue where Docker would fail to start after importing containers from Toolbox

**Upgrades**

- qcow-tool 0.7.2

### Beta 34 Release Notes (2016-12-20 1.13.0-rc4-beta34)

>**Important Note:** Plugins installed using the experimental "managed plugins" feature in Docker 1.12 must be removed/uninstalled before upgrading.

**New**

- Change UI for path location and open finder
- Trim compact on reboot
- Use more DNS servers, respect order

**Upgrades**

- Docker 1.13.0-rc4
- Linux Kernel 4.8.15

**Bug fixes and minor improvements**

- New Daemon icon
- Support Copy/Paste in About box
- Fix advanced daemon check json changes
- Auto update polling every 24h

### Beta 33.1 Release Notes (2016-12-16 1.13.0-rc3-beta33.1)

>**Important Note:** Plugins installed using the experimental "managed plugins" feature in Docker 1.12 must be removed/uninstalled before upgrading.

**Hotfix**

- Fixed issue where sometimes TRIM would cause the VM to hang

### Beta 33 Release Notes (2016-12-15 1.13.0-rc3-beta33)

>**Important Note:** Plugins installed using the experimental "managed plugins" feature in Docker 1.12 must be removed/uninstalled before upgrading.

**New**

- You can now edit filesharing paths
- Memory can be allocated with 256 MiB steps
- The storage location of the Linux volume can now be moved
- More explicit proxy settings
- Proxy can now be completly disabled
- You can switch daemon tabs without losing your settings
- You can't edit settings while docker is restarting

**Upgrades**

- Linux Kernel 4.8.14

**Bug fixes and minor improvements**

- Kernel boots with `vsyscall=emulate arg` and `CONFIG_LEGACY_VSYSCALL` is set to `NONE` in Moby

### Beta 32 Release Notes (2016-12-07 1.13.0-rc3-beta32)

**New**

- Support for arm, aarch64, ppc64le architectures using qemu

**Upgrades**

- Docker 1.13.0-rc3
- Docker Machine 0.9.0-rc2
- Linux Kernel 4.8.12

**Bug fixes and minor improvements**

- VPNKit: Improved diagnostics
- Fix vsock deadlock under heavy write load
- On the beta channel you can't opt-out of analytics
- If you opt-out of analytics, you're prompted for approval before a bug report is sent

### Beta 31 Release Notes (2016-12-01 1.13.0-rc2-beta31)

**New**

- Dedicated preference pane for advanced configuration of the docker daemon (edit daemon.json). See [[Daemon Advanced (JSON configuration file)](index.md#daemon-advanced-json-configuration-file).

- Docker Experimental mode can be toggled. See [Daemon Basic (experimental mode and registries)](index.md#daemon-basic-experimental-mode-and-registries).

**Upgrades**

- Docker 1.13.0-rc2
- Docker Compose 1.9.0
- Docker Machine 0.9.0-rc1
- Linux kernel 4.8.10

**Bug fixes and minor improvements**

- Fixed bug where search domain could be read as `DomainName`
- VPNKit: don't permute resource records in responses
- VPNKit: reduced the amount of log spam
- Dedicated preference pane for HTTP proxy settings
- Dedicated preference pane for CPU & Memory computing resources
- Privacy settings moved to the general preference pane
- Fixed an issue where proxy settings were erased if registries or mirrors changed.
- Tab key is now cycling through tabs while setting proxy parameters
- Fixed an issue where the preference pane disappeared when the welcome whale menu was closed

### Beta 30 Release Notes (2016-11-10 1.12.3-beta30)

**New**

- Better support for Split DNS VPN configurations

**Upgrades**

- Docker Compose 1.9.0-rc4
- Linux kernel 4.4.30

**Bug fixes and minor changes**

- HyperKit: code cleanup and minor fixes
- VPNKit: improvements to DNS handling
- Improvements to Logging and Diagnostics
- osxfs: switched to `libev/kqueue` to improve latency


### Beta 29.3 Release Notes (2016-11-02 1.12.3-beta29.3)

**Upgrades**

- Docker Compose 1.9.0-rc2
- `osxfs`: Fixed a simultaneous volume mount race which can result in a crash

### Beta 29.2 Release Notes (2016-10-27 1.12.2-beta29.2)

**Hotfixes**

- Upgrade to Docker 1.12.3

### Beta 29.1 Release Notes (2016-10-26 1.12.1-beta29.1)

**Hotfixes**

- Fixed missing `/dev/pty/ptmx`

### Beta 29 Release Notes (2016-10-25 1.12.3-rc1-beta29)

**New**

- Overlay2 is now the default storage driver. You must do a factory reset for overlay2 to be automatically used. (#5545)

**Upgrades**

- Docker 1.12.3-rc1
- Linux kernel 4.4.27

**Bug fixes and minor changes**

- Fix an issue where the whale animation during setting change was inconsistent
- Fix an issue where some windows stayed hidden behind another app
- Fix application of system or custom proxy settings over container restart
- Increase default ulimit for memlock (fixes [https://github.com/docker/for-mac/issues/801](https://github.com/docker/for-mac/issues/801) )
- Fix an issue where the Docker status would continue to be
      yellow/animated after the VM had started correctly
- osxfs: fix the prohibition of chown on read-only or mode 0 files (fixes [https://github.com/docker/for-mac/issues/117](https://github.com/docker/for-mac/issues/117), [https://github.com/docker/for-mac/issues/263](https://github.com/docker/for-mac/issues/263), [https://github.com/docker/for-mac/issues/633](https://github.com/docker/for-mac/issues/633) )

### Beta 28 Release Notes (2016-10-13 1.12.2-rc3-beta28)

**Upgrades**

- Docker 1.12.2
- Kernel 4.4.24
- Notary 0.4.2

**Bug fixes and minor changes**

- Fixed an issue where Docker for Mac was incorrectly reported as updated
- osxfs: Fixed race condition causing some reads to run forever
- Channel is now displayed in About box
- Crash reports are sent over Bugsnag rather than HockeyApp

### Beta 27 Release Notes (2016-09-28 1.12.2-rc1-beta27)

**Upgrades**

* Docker 1.12.2-rc1
* Docker Machine 0.8.2
* Docker compose 1.8.1
* Kernel vsock driver v7
* Kernel 4.4.21
* aufs 20160912

**Bug fixes and minor changes**

* Fixed an issue where some windows did not claim focus correctly
* Added UI when switching channel to prevent user losing containers and settings
* Check disk capacity before Toolbox import
* Import certificates in `etc/ssl/certs/ca-certificates.crt`
* DNS: reduce the number of UDP sockets consumed on the host
* VPNkit: improve the connection-limiting code to avoid running out of sockets on the host
* UDP: handle diagrams bigger than 2035, up to the configured macOS kernel limit
* UDP: made the forwarding more robust; now, drop packets and continue rather than stopping
* disk: made the "flush" behaviour configurable for database-like workloads. This works around a performance regression in `v1.12.1`.

### Beta 26 Release Notes (2016-09-14 1.12.1-beta26)

**New**

* Improved support for macOS 10.12 Sierra

**Upgrades**

* Linux kernel 4.4.20
* aufs 20160905

**Bug fixes and minor changes**

* Fixed communications glitch when UI talks to `com.docker.vmnetd`. Fixes [https://github.com/docker/for-mac/issues/90](https://github.com/docker/for-mac/issues/90)

* UI fix for macOs 10.12

* Windows open on top of full screen app are available in all spaces

* Reporting a bug, while not previously logged into GitHub now works

* When a diagnostic upload fails, the error is properly reported

* `docker-diagnose` displays and records the time the diagnosis was captured

* Ports are allowed to bind to host addresses other than `0.0.0.0` and `127.0.0.1`. Fixes issue reported in [https://github.com/docker/for-mac/issues/68](https://github.com/docker/for-mac/issues/68).

* We no longer compute the container folder in `com.docker.vmnetd`. Fixes [https://github.com/docker/for-mac/issues/47](https://github.com/docker/for-mac/issues/47).

**Known Issues**

* `Docker.app` sometimes uses 200% CPU after macOS wakes up from sleep mode. The
issue is being investigated. The workaround is to restart Docker.app.

* There are a number of issues with the performance of directories bind-mounted with `osxfs`. In particular, writes of small blocks and
traversals of large directories are currently slow. Additionally, containers
that perform large numbers of directory operations, such as repeated scans of
large directory trees, may suffer from poor performance. More information is
available in [Known Issues](troubleshoot.md#known-issues) in Troubleshooting.

* Under some unhandled error conditions, `inotify` event delivery can fail and become permanently disabled. The workaround is to restart `Docker.app`.

### Beta 25 Release Notes (2016-09-07 1.12.1-beta25)

**Upgrades**

* Experimental support for macOS 10.12 Sierra (beta)

**Bug fixes and minor changes**

* VPNKit supports search domains
* Entries from `/etc/hosts` should now resolve from within containers
* osxfs: fix thread leak

**Known issues**

* Several problems have been reported on macOS 10.12 Sierra and are being
investigated. This includes failure to launch the app and being unable to
upgrade to a new version.

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The
issue is being investigated. The workaround is to restart Docker.app

* There are a number of issues with the performance of directories bind-mounted
with `osxfs`. In particular, writes of small blocks and traversals of large
directories are currently slow. Additionally, containers that perform large
numbers of directory operations, such as repeated scans of large directory
trees, may suffer from poor performance. More information is available in [Known
Issues](troubleshoot.md#known-issues) in Troubleshooting.

* Under some unhandled error conditions, `inotify` event delivery can fail and become permanently disabled. The workaround is to restart Docker.app.

### Beta 24 Release Notes (2016-08-23 1.12.1-beta24)

**Upgrades**

* Docker 1.12.1
* Docker Machine 0.8.1
* Linux kernel 4.4.19
* aufs 20160822

**Bug fixes and minor changes**

* osxfs: fixed a malfunction of new directories that have the same name as an old directory that is still open

* osxfs: rename events now trigger DELETE and/or MODIFY `inotify` events (saving with TextEdit works now)

* slirp: support up to 8 external DNS servers

* slirp: reduce the number of sockets used by UDP NAT, reduce the probability that NAT rules will time out earlier than expected

* The app warns user if BlueStacks is installed (potential kernel panic)

**Known issues**

* Several problems have been reported on macOS 10.12 Sierra and are being investigated. This includes failure to launch the app and being unable to
upgrade to a new version.

* `Docker.app` sometimes uses 200% CPU after macOS wakes up from sleep mode.  The issue is being investigated. The workaround is to restart `Docker.app`.

* There are a number of issues with the performance of directories bind-mounted with `osxfs`. In particular, writes of small blocks and traversals of large
directories are currently slow. Additionally, containers that perform large
numbers of directory operations, such as repeated scans of large directory
trees, may suffer from poor performance. For more information and workarounds, see the bullet on [performance of bind-mounted directories](troubleshoot.md#bind-mounted-dirs) in [Known Issues](troubleshoot.md#known-issues) in Troubleshooting.

* Under some unhandled error conditions, `inotify` event delivery can fail and become permanently disabled. The workaround is to restart `Docker.app`.

### Beta 23 Release Notes (2016-08-16 1.12.1-rc1-beta23)

**Upgrades**

* Docker 1.12.1-rc1
* Linux kernel 4.4.17
* aufs 20160808

**Bug fixes and minor changes**

* Moby: use default sysfs settings, transparent huge pages disabled
* Moby: cgroup mount to support systemd in containers
* osxfs: fixed an issue that caused `inotify` failure and crashes
* osxfs: fixed a directory fd leak
* Zsh completions

**Known issues**

*  Docker for Mac is not supported on macOS 10.12 Sierra

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app

* There are a number of issues with the performance of directories bind-mounted with `osxfs`. In particular, writes of small blocks and traversals of large directories are currently slow. Additionally, containers that perform large numbers of directory operations, such as repeated scans of large directory trees, may suffer from poor performance. For more information and workarounds, see the bullet on [performance of bind-mounted directories](troubleshoot.md#bind-mounted-dirs) in [Known Issues](troubleshoot.md#known-issues) in Troubleshooting.

* Under some unhandled error conditions, `inotify` event delivery can fail and become permanently disabled. The workaround is to restart Docker.app

### Beta 22 Release Notes (2016-08-11 1.12.0-beta22)

**Upgrades**

*  Linux kernel to 4.4.16

**Bug fixes and minor changes**

* Increase Moby fs.file-max to 524288
* Use Mac System Configuration database to detect DNS
* HyperKit updated with dtrace support and lock fixes
* Fix Moby Diagnostics and Update Kernel
* UI Fixes
* osxfs: fix socket chowns

**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app

* There are a number of issues with the performance of directories bind-mounted with `osxfs`. In particular, writes of small blocks and traversals of large directories are currently slow. Additionally, containers that perform large numbers of directory operations, such as repeated scans of large directory trees, may suffer from poor performance. More information is available in [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

* Under some unhandled error conditions, `inotify` event delivery can fail and become permanently disabled. The workaround is to restart Docker.app

### Beta 21.1 Release Notes (2016-08-03 1.12.0-beta21.1)

This bug fix release contains osxfs improvements. The fixed issues may have
been seen as failures with apt-get and npm in containers, missed `inotify`
events or unexpected unmounts.

**Hotfixes**

* osxfs: fixed an issue causing access to children of renamed directories to fail (symptoms: npm failures, apt-get failures) (docker/for-mac)

* osxfs: fixed an issue causing some ATTRIB and CREATE `inotify` events to fail delivery and other `inotify` events to stop

* osxfs: fixed an issue causing all `inotify` events to stop when an ancestor directory of a mounted directory was mounted

* osxfs: fixed an issue causing volumes mounted under other mounts to spontaneously unmount (docker/docker#24503)

#### Docker for Mac 1.12.0 (2016-07-28 1.12.0-beta21)

**New**

* Docker for Mac is now available from 2 channels: **stable** and **beta**. New features and bug fixes will go out first in auto-updates to users in the beta channel. Updates to the stable channel are much less frequent and happen in sync with major and minor releases of the Docker engine. Only features that are well-tested and ready for production are added to the stable channel releases. For downloads of both and more information, see the [Getting Started](index.md#download-docker-for-mac).

**Upgrades**

* Docker 1.12.0 with experimental features
* Docker Machine 0.8.0
* Docker Compose 1.8.0

**Bug fixes and minor changes**

* Check for updates, auto-update and diagnose can be run by non-admin users
* osxfs: fixed an issue causing occasional incorrect short reads
* osxfs: fixed an issue causing occasional EIO errors
* osxfs: fixed an issue causing `inotify` creation events to fail
* osxfs: increased the `fs.inotify.max_user_watches` limit in Moby to 524288
* The UI shows documentation link for sharing volumes
* Clearer error message when running with outdated Virtualbox version
* Added link to sources for qemu-img

**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app

* There are a number of issues with the performance of directories bind-mounted with `osxfs`.  In particular, writes of small blocks, and traversals of large directories are currently slow.  Additionally, containers that perform large numbers of directory operations, such as repeated scans of large directory trees, may suffer from poor performance. For more information and workarounds, see [Known Issues](troubleshoot.md#known-issues) in [Logs and Troubleshooting](troubleshoot.md).

* Under some unhandled error conditions, `inotify` event delivery can fail and become permanently disabled. The workaround is to restart Docker.app

### Beta 20 Release Notes (2016-07-19 1.12.0-rc4-beta20)

**Bug fixes and minor changes**

* Fixed `docker.sock` permission issues
* Don't check for update when the settings panel opens
* Removed obsolete DNS workaround
* Use the secondary DNS server in more circumstances
* Limit the number of concurrent port forwards to avoid running out of resources
* Store the database as a "bare" git repo to avoid corruption problems

**Known issues**

*  `Docker.app` sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker for Mac (`Docker.app`).

### Beta 19 Release Notes (2016-07-14 1.12.0-rc4-beta19)

**New**

* Added privacy tab in settings
* Allow the definition of HTTP proxy overrides in the UI

**Upgrades**

* Docker 1.12.0 RC4
* Docker Compose 1.8.0 RC2
* Docker Machine 0.8.0 RC2
* Linux kernel 4.4.15

**Bug fixes and minor changes**

* Filesystem sharing permissions can only be configured in the UI (no more `/Mac` in moby)
* `com.docker.osx.xhyve.hyperkit`: increased max number of fds to 10240
* Improved Moby syslog facilities
* Improved file-sharing tab
* `com.docker.slirp`: included the DNS TCP fallback fix, required when UDP responses are truncated
* `docker build/events/logs/stats... ` won't leak when iterrupted with Ctrl-C

**Known issues**

* See [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

### Beta 18.1 Release Notes (2016-07-07 1.12.0-rc3-beta18.1)

>**Note**: Docker 1.12.0 RC3 release introduces a backward incompatible change from RC2. You can fix this by [recreating or updating your containers](troubleshoot.md#recreate-or-update-your-containers-after-beta-18-upgrade) as described in Troubleshooting.

**Hotfix**

* Fixed issue resulting in error "Hijack is incompatible with use of CloseNotifier", reverts previous fix for `Ctrl-C` during build.

**New**

* New host/container file sharing UI
* `/Mac` bind mount prefix is deprecated and will be removed soon

**Upgrades**

* Docker 1.12.0 RC3

**Bug fixes and minor changes**

* VPNKit: Improved scalability as number of network connections increases
* The docker API proxy was failing to deal with some 1.12 features (e.g. health check)

**Known issues**

* See [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

### Beta 18 Release Notes (2016-07-06 1.12.0-rc3-beta18)

**New**

* New host/container file sharing UI
* `/Mac` bind mount prefix is deprecated and will be removed soon

**Upgrades**

* Docker 1.12.0 RC3

**Bug fixes and minor changes**

* VPNKit: Improved scalability as number of network connections increases
* Interrupting a `docker build` with Ctrl-C will actually stop the build
* The docker API proxy was failing to deal with some 1.12 features (e.g. health check)

**Known issues**

* See [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

### Beta 17 Release Notes (2016-06-29 1.12.0-rc2-beta17)

**Upgrades**

* Linux kernel 4.4.14, aufs 20160627

**Bug fixes and minor changes**

* Documentation moved to [https://docs.docker.com/docker-for-mac/](/docker-for-mac/)
* Allow non-admin users to launch the app for the first time (using admin creds)
* Prompt non-admin users for admin password when needed in Preferences
* Fixed download links, documentation links
* Fixed "failure: No error" message in diagnostic panel
* Improved diagnostics for networking and logs for the service port openers

**Known issues**

* See [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

### Beta 16 Release Notes (2016-06-17 1.12.0-rc2-beta16)

**Upgrades**

* Docker 1.12.0 RC2
* docker-compose 1.8.0 RC1
* docker-machine 0.8.0 RC1
* notary 0.3
* Alpine 3.4

**Bug fixes and minor changes**

* VPNKit: Fixed a regressed error message when a port is in use
* Fixed UI crashing with `NSInternalInconsistencyException` / fixed leak
* HyperKit API: Improved error reporting
* osxfs: fix sporadic EBADF due to fd access/release races (#3683)


**Known issues**

* See [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

### Beta 15 Release Notes (2016-06-10 1.11.2-beta15)

**New**

* Registry mirror and insecure registries can now be configured from Preferences
* VM can now be restarted from Preferences
* `sysctl.conf` can be edited from Preferences

**Upgrades**

* Docker 1.11.2
* Linux 4.4.12, `aufs` 20160530

**Bug fixes and minor changes**

* Timekeeping in Moby VM improved
* Number of concurrent TCP/UDP connections increased in VPNKit
* Hyperkit: `vsock` stability improvements
* Fixed crash when user is admin

**Known issues**

* See [Known Issues](troubleshoot.md#known-issues) in [Troubleshooting](troubleshoot.md)

### Beta 14 Release Notes (2016-06-02 1.11.1-beta14)

**New**

* New settings menu item, **Diagnose & Feedback**, is available to run diagnostics and upload logs to Docker.

**Known issues**

* `Docker.app` sometimes uses 200% CPU after macOS wakes up from sleep mode with macOS 10.10. The issue is being investigated. The workaround is to restart `Docker.app`.

**Bug fixes and minor changes**

* `osxfs`: now support `statfs`
* **Preferences**: updated toolbar icons
* Fall back to secondary DNS server if primary fails.
* Added a link to the documentation from menu.

### Beta 13.1 Release Notes (2016-05-28 1.11.1-beta13.1)

**Hotfixes**

* `osxfs`:
  - Fixed sporadic EBADF errors and End_of_file crashes due to a race corrupting node table invariants
  - Fixed a crash after accessing a sibling of a file moved to another directory caused by a node table invariant violation
* Fixed issue where Proxy settings were applied on network change, causing docker daemon to restart too often
* Fixed issue where log file sizes doubled on docker daemon restart

### Beta 13 Release Notes (2016-05-25 1.11.1-beta13)

**New**

* `osxfs`: Enabled 10ms dcache for 3x speedup on a `go list ./...` test against docker/machine. Workloads heavy in file system path resolution (common among dynamic languages and build systems) will have those resolutions performed in amortized constant time rather than time linear in the depth of the path so speedups of 2-10x will be common.

* Support multiple users on the same machine, non-admin users can use the app as long as `vmnetd` has been installed. Currently, only one user can be logged in at the same time.

* Basic support for using system HTTP/HTTPS proxy in docker daemon

**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app.

**Bug fixes and minor changes**

* `osxfs`:
  - setting `atime` and `mtime` of nodes is now supported
  - Fixed major regression in Beta 12 with ENOENT, ENOTEMPY, and other spurious errors after a directory rename. This manifested as `npm install` failure and other directory traversal issues.
  - Fixed temporary file ENOENT errors
  - Fixed in-place editing file truncation error (e.g. `perl -i`)w
* improved time synchronisation after sleep

### Beta 12 Release (2016-05-17 1.11.1-beta12)

**Upgrades**

* FUSE 7.23 for [osxfs](osxfs.md)

**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app.

**Bug fixes and minor changes**

* UI improvements
* Fixed a problem in [osxfs](osxfs.md) where`mkdir` returned EBUSY but directory was created.

### Beta 11 Release (2016-05-10 1.11.1-beta11)

**New**

The `osxfs` file system now persists ownership changes in an extended attribute. (See the topic on [ownership](osxfs.md#ownership) in [Sharing the macOS file system with Docker containers](osxfs.md).)

**Upgrades**

* docker-compose 1.7.1 (see <a href="https://github.com/docker/compose/releases/tag/1.7.1" target="_blank"> changelog</a>)
* Linux kernel 4.4.9

**Bug fixes and minor changes**

* Desktop notifications after successful update
* No "update available" popup during install process
* Fixed repeated bind of privileged ports
* `osxfs`: Fixed the block count reported by stat
* Moby (Backend) fixes:
  - Fixed `vsock` half closed issue
  - Added NFS support
  - Hostname is now Moby, not Docker
  - Fixes to disk formatting scripts
  - Linux kernel upgrade to 4.4.9

## Beta 10 Release (2016-05-03 1.11.0-beta10)

**New**

* Token validation is now done over an actual SSL tunnel (HTTPS). (This should fix issues with antivirus applictions.)

**Upgrades**

* Docker 1.11.1

**Bug fixes and minor changes**

* UCP now starts again
* Include debugging symbols in HyperKit
* vsock stability improvements
* Addressed glitches in **Preferences** panel
* Fixed issues impacting the “whale menu”
* Fixed uninstall process
* HyperKit vcpu state machine improvements, may improve suspend/resume


### Beta 9 Release (2016-04-26 1.11.0-beta9)

**New**

* New Preferences window - memory and vCPUs now adjustable
* `localhost` is now used for port forwarding by default.`docker.local` will no longer work as of Beta 9.

**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app.

**Bug fixes and minor changes**

* Fix loopback device naming
* Improved docker socket download and osxfs sequential write by 20%
* `com.docker.osxfs`
  - improved sequential read throughput by up to 20%
  - improved `readdir` performance by up to 6x
  - log all fatal exceptions
* More reliable DNS forwarding over UDP and TCP
* UDP ports can be proxied over vsock
* Fixed EADDRINUSE (manifesting as errno 526) when ports are re-used
* Send ICMP when asked to not fragment and we can't guarantee it
* Fixed parsing of UDP datagrams with IP socket options
* Drop abnormally large ethernet frames
* Improved HyperKit logging
* Record VM start and stop events

### Beta 8 Release (2016-04-20 1.11.0-beta8)

**New**

* Networking mode switched to VPN compatible by default, and as part of this change the overall experience has been improved:
 - `docker.local` now works in VPN compatibility mode
 - exposing ports on the Mac is available in both networking modes
 - port forwarding of privileged ports now works in both networking modes
 - traffic to external DNS servers is no longer dropped in VPN mode


* `osxfs` now uses `AF_VSOCK` for transport giving ~1.8x speedup for large sequential read/write workloads but increasing latency by ~1.3x. `osxfs` performance engineering work continues.


**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart `Docker.app`

**Bug fixes and minor changes**

* Apple System Log now used for most logs instead of direct filesystem logging
* `docker_proxy` fixes
* Merged HyperKit upstream patches
* Improved error reporting in `nat` network mode
* `osxfs` `transfused` client now logs over `AF_VSOCK`
* Fixed a `com.docker.osx.HyperKit.linux` supervisor deadlock if processes exit during a controlled shutdown
* Fixed VPN mode malformed DNS query bug preventing some resolutions


### Beta 7 Release (2016-04-12 1.11.0-beta7)

**New**

* Docs are updated per the Beta 7 release
* Use AF_VSOCK for docker socket transport

**Upgrades**

* docker 1.11.0-rc5
* docker-machine 0.7.0-rc3
* docker-compose 1.7.0rc2


**Known issues**

* Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app

* If VPN mode is enabled and then disabled and then re-enabled again, `docker ps` will block for 90s

**Bug fixes and minor changes**

* Logging improvements
* Improve process management

## Beta 6 Release (2016-04-05 1.11.0-beta6)

**New**

* Docs are updated per the Beta 6 release
* Added uninstall option in user interface

**Upgrades**

* docker 1.11.0-rc5
* docker-machine 0.7.0-rc3
* docker-compose 1.7.0rc2

**Known issues**

* `Docker.app` sometimes uses 200% CPU after macOS wakes up from sleep mode.
The issue is being investigated. The workaround is to restart
`Docker.app`.

* If VPN mode is enabled, then disabled and re-enabled again,
`docker ps` will block for 90 seconds.

**Bug fixes and minor changes**

* Fixed osxfs multiple same directory bind mounts stopping inotify
* Fixed osxfs `setattr` on mode 0 files (`sed` failures)
* Fixed osxfs blocking all operations during `readdir`
* Fixed osxfs mishandled errors which crashed the file system and VM
* Removed outdated `lofs`/`9p` support
* Added more debugging info to logs uploaded by `pinata diagnose`
* Improved diagnostics from within the virtual machine
* VirtualBox version check now also works without VBoxManage in path
* VPN mode now uses same IP range as NAT mode
* Tokens are now verified on port 443
* Removed outdated uninstall scripts
* Increased default ulimits
* Port forwarding with `-p` and `-P` should work in VPN mode
* Fixed a memory leak in `com.docker.db`
* Fixed a race condition on startup between Docker and networking which can
lead to `Docker.app` not starting on reboot

### Beta 5 Release (2016-03-29 1.10.3-beta5)

**New**

- Docs are updated per the Beta 5 release!

**Known issues**

- There is a race on startup between docker and networking which can lead to Docker.app not starting on reboot. The workaround is to restart the application manually.

- Docker.app sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart Docker.app.

- In VPN mode, the `-p` option needs to be explicitly of the form `-p <host port>:<container port>`. `-p <port>` and `-P` will not work yet.

**Bug fixes and minor changes**

- Updated DMG background image
- Show correct VM memory in Preferences
- Feedback opens forum, not email
- Fixed RAM amount error message
- Fixed wording of CPU error dialog
- Removed status from Preferences
- Check for incompatible versions of Virtualbox

### Beta 4 Release (2016-03-22 1.10.3-beta4)

**New Features and Upgrades**

- File system/sharing: Support `inotify` events so that file system events on the Mac will trigger file system activations inside Linux containers

- Install Docker Machine as a part of Docker for Mac install in ``/usr/local`

- Added animated popover window to help first-time users get started

- Added a Beta icon to About box

**Known Issues**

- There is a race on startup between Docker and networking that can lead to `Docker.app` not starting on reboot. The workaround is to restart the application manually.

- `Docker.app` sometimes uses 200% CPU after macOS wakes up from sleep mode. The issue is being investigated. The workaround is to restart `Docker.app`.

- VPN/Hostnet: In VPN mode, the `-p` option needs to be explicitly of the form
`-p <host port>:<container port>`. `-p <port>` and `-P` will not
work yet.

**Bug fixes and minor changes**

- Hostnet/VPN mode: Fixed Moby DNS resolver failures by proxying the "Recursion Available" flag.

- `docker ps` shows IP address rather than `docker.local`

- Re-enabled support for macOS Yosemite version 10.10

- Ensured binaries are built for 10.10 rather than 10.11

- Fixed “Notification Center”-related crash on startup

- Fixed watchdog crash on startup


### Beta 3 Release (2016-03-15 1.10.3-beta3)

**New Features and Upgrades**

- Improved file sharing write speed in osxfs

- User space networking: Renamed `bridged` mode to `nat` mode

- Docker runs in debug mode by default for new installs

- Docker Engine: Upgraded to 1.10.3

**Bug fixes and minor changes**

- GUI: Auto update automatically checks for new versions again

- File System
  - Fixed osxfs chmod on sockets
  - FixED osxfs EINVAL from `open` using O_NOFOLLOW


- Hypervisor stability fixes, resynced with upstream repository

- Hostnet/VPN mode
  - Fixed get/set VPN mode in Preferences (GUI)
  - Added more verbose logging on errors in `nat` mode
  - Show correct forwarding details in `docker ps/inspect/port` in `nat` mode


- New lines ignored in token entry field

- Feedback mail has app version in subject field

- Clarified open source licenses

- Crash reporting and error handling
  - Fixed HockeyApp crash reporting
  - Fatal GUI errors now correctly terminate the app again
  - Fix proxy panics on EOF when decoding JSON
  - Fix long delay/crash when switching from `hostnet` to `nat` mode


- Logging
  - Moby logs included in diagnose upload
  - App version included in logs on startup

### Beta 2 Release (2016-03-08 1.10.2-beta2)

**New Features and Upgrades**

- GUI
  - Added VPN mode/`hostnet` to Preferences
  - Added disable Time Machine backups of VM disk image to Preferences


- Added `pinata` configuration tool for experimental Preferences

- File System: Added guest-to-guest FIFO and socket file support

- Upgraded Notary to version 0.2


**Bug fixes and minor changes**

- Fixed data corruption bug during cp (use of sendfile/splice)
- Fixed About box to contain correct version string

- Hostnet/VPN mode
  - Stability fixes and tests
  - Fixed DNS issues when changing networks


- Cleaned up Docker startup code related to Moby

- Fixed various problems with linking and dependencies

- Various improvements to logging

### Beta 1 Release (2016-03-01 1.10.2-b1)

- GUI
  - Added dialog to explain why we need admin rights
  - Removed shutdown/quit window
  - Improved machine migration
  - Added “Help” option in menu to open documentation web pages
  - Added license agreement
  - Added MixPanel support


- Added HockeyApp crash reporting
- Improve signal handling on task manager
- Use ISO timestamps with microsecond precision for logging
- Clean up logging format

- Packaging
  - Create /usr/local if it doesn't exist
  - docker-uninstall improvements
  - Remove docker-select as it's no longer used


- Hypervisor
  - Added PID file
  - Networking reliability improvements


- Hostnet

  - Fixed port forwarding issue
  - Stability fixes
  - Fixed setting hostname


- Fixed permissions on `usr/local` symbolic links
