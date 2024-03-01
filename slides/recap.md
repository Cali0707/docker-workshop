---
title: Docker Workshop Recap
author: Calum Murray
date: 2024-02-29
---
# Let's Recap

<!-- stop -->

## Image layout

<!-- stop -->

## Dockerfiles 

<!-- stop -->

## Variables

<!-- stop -->

## Volumes 

<!-- stop -->

## Docker Compose 
---
# Image Layout

<!-- stop -->

## Content addressable

Everything in the image can be found using the checksum values, this is really cool - we can discover everything starting at the index.json.

The checksum values can also be used to verify that the file has not been modifies/is correct.

<!-- stop -->

## Layers

Each layer contains only the files which it modifies.

When a layer deletes a file the filename is prefixed with .wh.


<!-- stop -->

## Configuration

This includes all kinds of useful information:

- Environment variables
- OS
- Architecture
- And more we didn't have time to cover today!

---

# Dockerfiles

<!-- stop -->

## FROM

The FROM directive lets us pick a starting image.

<!-- stop -->

## COPY

The COPY directive lets us copy files from our local machine into the container image

<!-- stop -->

## ARG

The ARG directive lets us set a build time variable that is not included in the final image

<!-- stop -->

## ENV

The ENV directive lets us set an environment variable that is included in the final image

<!-- stop -->

## CMD

The CMD directive lets us select which command we want to run when the container starts

<!-- stop -->

## RUN

The RUN directive lets us run commands with the /bin/sh inside the container as we build the container image

Important to note: when building containers, this command is only re-run if the command changes, or an earlier layer causes a re-run of all subsequent layers

---
# Variables

<!-- stop -->

## Setting them at build time

We can use ARG and ENV in our docker files

We can also pass --build-arg flags to docker build

<!-- stop -->

## Setting them at run time

We can use ENV in our docker files and they will still apply at run time

We can also pass -e flags to docker run

---

# Volumes 

<!-- stop -->

Volumes are a way which we can map files from our host machine into the container runtime.

## When would we want to use volumes?

<!-- stop -->

- Development containers!
- Persistent storage
- Mapping large/changing files into the container at runtime

---

# Docker Compose

This is a way of declaritively telling docker how to build your Dockerfiles. It can make working with docker much easier.

<!-- stop -->

Basically anything you can set in Docker with the docker build / docker run commands are supported in the docker compose spec.

---

# How do Containers Run?

There are three key components to running a container (at least on Linux, it varies by host OS)

<!-- stop -->

## Chroot

Chroot is an operation that changes the root directory for the currently running process and its children.

<!-- stop -->

## Namespaces

Namespaces are a Linux feature where kernel resources can be partitioned so that each set of processes sees a different set of resources.

<!-- stop -->

## Control Groups (cgroups)

Control Groups are a way of setting limits on different resources for a set of processes. For example, how many CPU cores a group of processes can access.
