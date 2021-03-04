---
layout: page
title: blog
permalink: /blog/
---

# Pr0x1mas' Blog - Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>