---
layout: page
title: Blog
permalink: /blog/
---

I have a blog. Not sure why, it's not like anyone will ever read it, but here we are.


## Latest Posts
<ul>
  {% for post in site.posts %}
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p style="margin-top: -16px">
      <span class="material-icons-outlined md-18 inline-icon">schedule</span> 
       {{ post.date | date: "%-d %B %Y" }}
      <span class="material-icons-outlined md-18 inline-icon">account_circle</span>
       {{post.author}}
    </p>
    {{post.excerpt}}
  {% endfor %}
</ul>