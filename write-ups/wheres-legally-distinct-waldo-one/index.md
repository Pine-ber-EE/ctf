---
layout: post
title: "Where’s Legally Distinct Waldo One"
categories: [writeups, osint, patriotctf2025]
date: 2025-11-27
writeup: true
permalink: /write-ups/wheres-legally-distinct-waldo-one/
---

**PatriotCTF 2025**

I participated with my high school club team tjcsc in PatriotCTF 2025, and we got 54th overall!

**Challenge:** Where’s Legally Distinct Waldo One

**Category:** OSINT

**Flag:** pctf{horizon_hall}

So, here is the provided image:

![Provided challenge image](./waldo-000.png)

My first thought was that it looked like a college campus. Knowing that this CTF was hosted by George Mason University, that’s where I looked first.

Looking at the university campus in Google Maps, I notice that the building color scheme and design looks very similar to the building in the provided image

![GMU campus comparison](./waldo-001.png)

![Campus detail with similar architecture](./waldo-002.png)

So, I started looking around. There are two distinct features I was looking for:

![Highlighted features to match](./waldo-003.png)

First, I noticed a large cell tower. Then, I used the entrance to the building to narrow the specific angle the picture was taken from down. Upon looking around, I see:

![Cell tower and rooftop alignment](./waldo-004.png)

That’s the cell tower we need! And the rest of the roof seems to match the image. Now, we need to find the specific building the picture was taken from. Using the entrance, we can narrow the possibilities down:

![Entrance overview](./waldo-005.png)

There seems to be only two entrances to the building that look similar to the one in the image. Looking at the one on the left, I see:

![Entrance close-up](./waldo-006.png)

This seems to match quite well! I notice a few distinct similarities:

![Matching entrance similarities](./waldo-007.png)

Let’s see what building matches this POV:

![POV building confirmation](./waldo-008.png)

Horizon Hall? Let’s try that…

Boom! pctf{horizon_hall} was the flag. Pretty simple!