---
layout: home
title: Home
---

<span onclick="scrollDown()" id="down-icon" class="material-icons-outlined md-18">expand_more</span>

<div style="background-image: url('/assets/slideshow1.png')" id="main-site-title">
    <h1 id="main-site-title-text"></h1>
</div>

<div class="home-section grey">
    <h1>Latest Blog Post</h1>
    {% for post in site.posts limit:1 %}
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p style="margin-top: -16px; color: #FFFFFFB3;">
            <span class="material-icons-outlined md-18 inline-icon">schedule</span> 
            {{ post.date | date: "%-d %B %Y" }}
            <span class="material-icons-outlined md-18 inline-icon">account_circle</span>
            {{post.author}}
        </p>
        <i>{{ post.excerpt }}</i>
    {% endfor %}
</div>

<div class="home-section teal">
    <h1>Youtube</h1>
    <iframe style="float: left;" id="channel-trailer" class="section-image" src="https://www.youtube.com./embed/4gxDmlA7ohU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p style="float: right" class="section-text">I have a YouTube channel, where very occasionally I actually upload a video. My videos are oriented around gaming, with a main focus on Minecraft and Kerbal Space Program although other random games also feature occasionally.</p>
</div>

<div class="home-section grey">
    <h1>Programming</h1>
    <p style="float: left" class="section-text">I program stuff. Some of it is bad, some of it is worse, some of it is in JavaScript and some of it is in Python, and some of the older stuff is in Scratch. If you want to see my spaghetti code and the result of it, you can find my most recent projects <a href="/projects">here</a>, or check out my <a href="https://github.com/Pr0x1mas">Github</a>.</p>
    <div class="section-image" style="float: right; background-image: url('/assets/code.png')"></div>
</div>