---
layout: post
title:  "Resurrect your 2012 Google Nexus 7"
author: Pr0x1mas
banner-image: /assets/nexus7.jpg
---

The 2012 Nexus 7 is an android tablet that is definitely showing it's age. Released with Android 4.1 Jellybean, and updated all the way to 5.1 Lollipop, it has got progressively slower in recent years, and these days it is basically unusable. Restoring the tablet to an older factory image such as 4.4 Kitkat helps a bit, but it's still slow and you then lose support for some apps. Indeed, Android 5.1 is starting to lose support for some apps, so this guide aims to fix both of these issues, by installing a custom ROM such as LineageOS or CyanogenMod alongside ParrotMod, a flashable that improves performance.


## Disclaimer
I DID NOT CREATE THE ROMS LISTED IN THIS TUTORIAL
Your warranty will almost certainly be void if you do this (I would be surprised if you still had one on this tablet).
I am not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed. Please do some research if you have any concerns about installing this ROM. YOU are choosing to make these modifications. By flashing this ROM, you accept this disclaimer.

## Prerequisites

* You have access to a desktop computer running Windows, MacOS, or Linux 
* ADB is set up and accessable from all directories on your computer [(Installation guide here)](https://www.xda-developers.com/install-adb-windows-macos-linux/)
* You have access to a 2012 Nexus 7
* All data on the tablet you wish to keep is backed up safely

**Download all of these before you start the installation**

* [TWRP](https://dl.twrp.me/grouper/) (download the latest version)
* [CyanogenMod 12.1](https://cyanogenmodroms.com/link/cm-12-1-20161016-nightly-grouper-zip/) OR ANY OTHER CUSTOM ROM OF YOUR CHOOSING
* [OpenGapps](https://opengapps.org/) ONLY IF YOU WANT THE PLAY STORE AND SERVICES [select ARM, the android version you're flashing (5.1 in this case), and pico (the nexus 7 has a tiny system partition so this is the only one that will fit)]
* [SuperSU](https://download.chainfire.eu/696/supersu/) (This roots your phone, allowing ParrotMod to work.)
* [ParrotMod](https://parrotgeek.com/dl.php?file=ParrotMod_Universal_2016-08-31.zip) (This is a mod that greatly improves performance on the Nexus 7. It works on all most ROMS as far as I know - the dev says it doesn't work on android 7 but I've read in other places that it does.)

## Step 1 - Install TWRP

In order to flash a custom ROM, you must first install a custom recovery. These days, pretty much the only option for custom recoveries is TWRP, so that is what we are using today.

Reboot your device into fastboot mode by (from the device being powered off) holding down the power and volume down buttons at the same time.

Connect your device to your computer with a USB cable.

In a command prompt in the same directory as the files you downloaded, type

`fastboot flash recovery twrp-3.5.2_9-0-grouper.img`

This will flash TWRP to your tablet, allowing you to install a custom ROM and any other flashable easily.

To get into TWRP, use the volume buttons to cycle through the bootloader options, and select 'reboot recovery'

## Step 2 - Wipe the OS

Before we can install a custom ROM, we need to remove the existing OS on the tablet. To do this, go to Wipe>Advanced Wipe and check the boxes next to 'system', 'data', and 'cache'. Finally, swipe the blue arrow right to wipe the device as described. Next, press the back button until you are back to the 'Wipe' screen, and swipe to wipe again, this time we are factory resetting the device in order to remove any app data that may confuse the custom ROM.

## Step 3 - Install the ROM

Now we've removed the existing Android OS, we can flash a new one.

First, press the back button until you are on the main TWRP screen again. Go to Advanced>ADB Sideload, and open up a windows terminal in the same directory as the files you downloaded earlier. Swipe the arrow right to start sideload, then type the following command into your terminal:

```
adb sideload [ROM-NAME-HERE]
```

If you are using CM12.1 like I am, the filename is `cm-12.1-20161016-NIGHTLY-grouper.zip`

## Step 4, Install the rest

Repeat step 4 with the SuperSU zip, **and then** the ParrotMod zip. ParrotMod requires SuperSU to work, so it must be installed afterwards.

If you want google services, also install your OpenGapps zip via the same method.

## Step 5 - Finishing Off

And that's it! Press the 'reboot' button, and your tablet should reboot into Android. **If prompted to install the TWRP app, click 'Do Not Install'** It may take a while on the boot animation, as it is setting up the OS for first use.

Now, I'm not saying your nexus 7 will suddenly become as fast as it was 9 years ago. But it's certainly faster than it was.


Thanks for reading,  

                        - Pr0x1mas