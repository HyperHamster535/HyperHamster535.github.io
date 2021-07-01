---
layout: post
title:  "Windows 11's Hardware Requirements are Ridiculous"
author: Pr0x1mas
banner-image: /assets/windows11.jpg
---

Back in 2015 when Microsoft announced Windows 10, they stated that it was going to be the last version of Windows. In the six years since then, it became pretty clear that this was definitely the case. So it was to my and many other's surprise when a development build of Windows 11 leaked on the 15th of june, 9 days before Microsoft were set to announce 'the next generation of Windows'. 

Prior to the leak, it was widely assumed that what they would be announcing was just an update to Windows 10, perhaps a UI refresh. There were a couple of hints though, such as the fact that the event was scheduled for 11AM EST, and that on the official Windows YouTube channel, an exactly [eleven minute long video titled 'Startup Sounds - Slo-fi Remix'](https://www.youtube.com/watch?v=fQ1vnxWEqiE) was uploaded. As it was, when the Windows build did leak, Microsoft tweeted ["This is just the Start. Tune in on June 24th at 11 am ET to see what's next."](https://twitter.com/Windows/status/1404873374954758148) 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is just the Start. Tune in on June 24th at 11 am ET to see what&#39;s next. <a href="https://twitter.com/hashtag/MicrosoftEvent?src=hash&amp;ref_src=twsrc%5Etfw">#MicrosoftEvent</a> <a href="https://t.co/DM7SYVdc3j">https://t.co/DM7SYVdc3j</a></p>&mdash; Windows (@Windows) <a href="https://twitter.com/Windows/status/1404873374954758148?ref_src=twsrc%5Etfw">June 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

suggesting they intentionally leaked the build. Confusingly, Microsoft has also been sending DMCAs to any websites providing links to the build, so sadly whilst I do have a copy, I can't provide it here.


As expected, on June 24th, Windows 11 was announced. It was generally well received, with a slick new UI brought across from Windows 10X, the cancelled version of Windows Microsoft were developing for a device previously announced called the Surface Neo. A rough release date was set for late 2021/early 2022. Along with all of this, Microsoft also released the minimum system requirements for your device to run Windows 11. Long story short, they're stupid. Why? Because Windows 11 requires all systems to have the Trusted Platform Module 2.0, or TPM 2.0.

## What is TPM 2.0?
A TPM is a chip on the motherboard of a computer that adds certain security features, and is used for things like encryption. Including one in a device means it is far more secure. They are on most motherboards these days, but reasonably recent hardware might still not have it. TPM chips can actually be added to some older unsupported motherboards, but this is not something you can expect the average end user to do, plus this will not work on laptops and probably quite a lot of desktop motherboards. In fact, scalpers are already buying out add-on TPM chips.

## How does this affect hardware support for Windows 11
TPM 2.0 is a fairly new standard, and a lot of hardware doesn't support it. Microsoft state in their hardware requirements that nothing older than an 8th gen [Intel](https://docs.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-intel-processors "List of supported Intel processors on Microsoft's site") CPU or 2nd gen [Ryzen](https://docs.microsoft.com/en-us/windows-hardware/design/minimum/supported/windows-11-supported-amd-processors "List of supported AMD processors on Microsoft's site") CPU will support Windows 11. For a short time, Microsoft provided a tool called the PC Health Check App, which allowed you to check if your PC could run Windows 11. Since then however, the tool was taken down for some reason

![The download link for the PC Health Check App on Microsoft's site now just says 'coming soon'](/assets/noPCHealthCheck.png)

![The PC Health Check App, showing my perfectly fast laptop won't run Windows 11](/assets/noWindows11.png)

![Windows 11's hardware requirements, listed on the Microsoft site](/assets/windows11Requirements.png)

## Why is this stupid?
On paper, I can see Microsoft's point. Cyberattacks are a growing threat, and it makes sense to ensure that everyone is on secure hardware. But on the other hand, people aren't going to just stop using old hardware. And purely from this claim of security, the requirement means most of the population won't be getting Windows 11. Some might argue that there would be performance issues on older hardware, but this is frankly bullshit. My laptop runs a 5th gen i3 (5010U), and along with 8GB of RAM and an SSD, runs Windows 10 like a dream. Someone I know was running 10 on an upgraded 14 year old XPS (Core 2 Quad) with no problems, someone else a 10 year old Athlon system. They weren't running as fast as more modern hardware, but it was still perfectly usable. This restriction means that essentially any computers released before 2018 will be obsolete.

I can understand Microsoft's argument of security. But this should be down to the end user. Microsoft have required OEMs to support TPM 2.0 since 2016, so it's not like by supporting older hardware the standard will not become commonplace. By all means warn the user that by not using a TPM 2.0 enabled CPU, they are putting themselves at risk, but that's a choice they should be allowed to make. So far as I can tell, there is only one reason Microsoft are doing this. You guessed it... money. OEMs still pay for Windows licenses, so by suddenly requiring people to buy new machines, Microsoft are getting a cut from all the licenses shipped with them.

So yeah. Windows 11's hardware requirements are stupid, and are intentionally making perfectly good hardware run slowly.

As a side note, Windows 11's other requirement of Secure Boot makes dual booting less common versions of Linux with bootloaders not signed not possible unless you want to change a BIOS setting every time you switch OS'.