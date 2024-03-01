--- 
title: Docker Workshop Next Steps
author: Calum Murray
date: 2024-02-29
extensions:
  - qrcode
---

# Best Practices

<!-- stop -->

If an argument is only needed for a single RUN command, set the environment variable inline

<!-- stop -->

If a step is unlikely to change frequently, do it earlier than a step that would change frequently

<!-- stop -->

Use multi-stage builds if you can

<!-- stop -->

Create ephemeral containers

<!-- stop -->

Decouple your containers and applications

<!-- stop -->

Pin the base images you use

---

# Your task, should you choose to accept it

<!-- stop -->

## Build an app and run it using docker

The app is at:

```qrcode
https://github.com/Cali0707/docker-workshop/
```

<!-- stop -->

## We expect you to:

1. Fork the repository
2. Find a way to build the frontend and backend into Docker container(s) so that the app runs
3. Write a bash script file or docker compose file which we can run that will sucessfully build and deploy everything

<!-- stop -->

## Let's look at the code!
