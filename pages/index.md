---
title: Home
layout: blog
permalink: /index.html
show_bio: true
show_intro: true
hide_placeholder: true
list_source: none
--- 

Welcome to my website! Here's what I have to offer:

- **About:** background, teams, and ways to reach me.
- **Write-ups:** explanations of how I solved challenges and my thought process
- **Blog:** Not in use for now... but I might add notes in there sometime in the future
- **Links:** Discord :D

{% assign writeups = site.pages | where: "writeup", true | sort: "order" | reverse %}
{% assign latest_writeup = writeups | first %}
{% assign blog_posts = site.pages | where: "blog_post", true | sort: "date" | reverse %}
{% assign latest_blog = blog_posts | first %}

<section class="home-latest">
  <h2>Latest Write-up</h2>
  {% if latest_writeup %}
  <div class="latest-card">
    <h3>
      <a href="{{site.baseurl}}{{latest_writeup.url}}"
        >{{latest_writeup.title}}</a
      >
    </h3>
    <small class="date"
      >{{latest_writeup.date | date: "%b %-d, %Y"}}</small
    >
    <p>
      {{ latest_writeup.excerpt | strip_html | truncate: 140 }}
    </p>
  </div>
  {% else %}
  <p class="latest-placeholder">No write-ups yet. Check back soon.</p>
  {% endif %}
</section>

<section class="home-latest">
  <h2>Latest Blog Post</h2>
  {% if latest_blog %}
  <div class="latest-card">
    <h3>
      <a href="{{site.baseurl}}{{latest_blog.url}}"
        >{{latest_blog.title}}</a
      >
    </h3>
    <small class="date"
      >{{latest_blog.date | date: "%b %-d, %Y"}}</small
    >
    <p>
      {{ latest_blog.excerpt | strip_html | truncate: 140 }}
    </p>
  </div>
  {% else %}
  <p class="latest-placeholder">No blog posts yet. Check back soon.</p>
  {% endif %}
</section>
