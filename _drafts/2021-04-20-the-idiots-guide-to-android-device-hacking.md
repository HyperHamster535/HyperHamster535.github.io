---
layout: post
title:  "The Idiot's Guide to Android Device Hacking"
author: ***REMOVED*** ***REMOVED***
---

As of late I have been getting quite into screwing with my various android devices, and so I thought I would write a guide for people such as myself a few years ago, who want to start 'rooting' or installing 'a custom ROM' on their device, but don't know what a lot of the terms mean.

## DISCLAIMER

* MANY OF THE METHODS DESCRIBED IN THIS ARTICLE MAY VOID YOUR WARRANTY
* I AM NOT RESPONSIBLE FOR ANY ISSUE WITH YOUR DEVICE
* THIS GUIDE DOES NOT APPLY TO 100% OF DEVICES, THIS IS BASED ON MY KNOWLEDGE OF AOSP AND SAMSUNG DEVICES - IT MAY APPLY TO OTHERS

## Part 1 - Recovery Mode

Every android device has a mode known as the 'recovery mode'. In it, you are usually given the option to:

* reboot (start device normally)
* factory reset your device (remove all user data and restore to factory settings)
* wipe the cache (temporary storage)
* apply an update from external storage such as an SD card. 

To enter recovery mode, you want to shut down your device, and then hold down the power, volume down, and home button (if you have one). On some devices, this will take you straight to recovery mode, but on others it will take you to what is known as the bootloader. In the bootloader, you are given a few options - 

* start (just boot up as normal)
* reboot bootloader (reboot back to where you are)
* recovery mode
* power off

This menu may seem a bit useless but it serves another purpose detailed in the next section.

## Part 2 - Download Mode

As a failsafe and tool for manufacturers, every android device has what is known as 'download mode'. In this download mode, with your device connected to a computer, you can replace entire sections of the internal storage of the device. Android devices have several 'partitions' - sections of the internal storage that serve different purposes. The main ones are

* `system` this contains android itself along with any preinstalled apps
* `recovery` the recovery mode mentioned above
* `data`/`userdata` all user data
* `cache` temporary storage for some data
* `boot`/`bootloader` the bootloader itself

But you only really need to worry about `system`, `recovery`, and `data`.

Remember that bootloader I mentioned in section 1? Congratulations, this is also download mode. If you don't have a bootloader, your phone is probably a 