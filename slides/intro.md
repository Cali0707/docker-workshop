---
title: Docker Workshop
author: Calum Murray
date: 2024-02-29
---

# Housekeeping

Please feel free to ask questions!

All slides, demos, and solution code will be made available after.

Some of the concepts presented today will include other concepts that are not usually taught in first year at UofT. 
I will try to explain the basics you need to know when that happens, but please raise your hand or google if you don't understand something.

---

# What is Docker?

From the docker website:
> Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your 
infrastructure so you can deliver software quickly.

<!-- stop -->

## Some thoughts:
 - This statement is accurate
 - Doesn't necessarily tell you what Docker does if you aren't familiar with Docker already

---
# Why is Docker?

<!-- stop -->

## Want all of our dependencies together with our code

Not all dependencies are included in a binary! They could also be:
- Dynamically linked (think libc)
- Dependencies in an interpreted language (node_modules in NodeJS)
- Configuration files you need on the computer (for example NGINX uses nginx.conf and various other configuration files)

<!-- stop -->

 ## Want to run more than one application on the same computer
 We don't need a full data center CPU with 64 cores to run a simple low volume wordpress site!

 But, we might have a lot of simple low volume wordpress sites

<!-- stop -->

 ## Want to isolate each application from each other

 - CPU
 - Memory
 - Filesystem
 - Processes
 - User/Groups


---

# What is Docker?

<!-- stop -->

## A way to package our code with all of its dependencies

I like to think of Docker as a bucket that holds my code along with all of the files it needs to run properly/correctly

<!-- stop -->

## A way to isolate our applications from each other

Each container has an isolated filesystem, users and groups, process tree, and CPU and Memory limits.

A user can have root privileges within a container but be unprivileged outside!

---

# Containers vs. VMs

Both are abstractions!

<!-- stop -->

## Containers

A container abstracts an application and the user space it runs in.

<!-- stop -->

## VMs

A VM abstracts the physical hardware of the computer so that we can run multiple OS instances on top of a single physical computer

<!-- stop -->

## Important: We can (and do) use both together

---

# Terminology

<!-- stop -->

## (Container) Images

> A container image is a standardized way of packaging software that represents a snapshot (image) of all the files needed to run the software.

<!-- stop -->

## Container

> A running container image that is isolated from other applications running on the machine. When a container image is run it becomes a container.


---

# How can we use Docker?

Simple: we make a Dockerfile!

Let's run a simple NGINX web server that serves a single html file, and explore how that works.

