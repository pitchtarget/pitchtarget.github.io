---
layout: default
title: Using the Mobile SDK - Tracking API
---

# Tracking API

### Using the Mobile SDK
Use a Mobile Tracking SDK when you need to keep track of conversion events that happen inside your native mobile app. Pitchtarget has native SDKs for iOS and Android.

The SDKs are open sourced and they are forked from the Adjust.io project. If you are already familiar with Adjust.io, you will be happy to know that Pitchtarget will be a mere drop-in replacement. You will only need to obtain an App ID from us.

### Obtaining the SDKs
In order to use the Tracking SDK, you must include it in your project. You can clone our repositories and following the instructions in the `README.md` files.

* [iOS SDK](https://github.com/pitchtarget/adjust-ios-sdk)
* [Android SDK](https://github.com/pitchtarget/adjust-android-sdk)

### Profiling
In order to create event-based audiences, you can use Pitchtarget to match or append profile information in your custom parameters payload.

By default, Pitchtarget creates an Audience Token which will anonymously identify the user. When you submit custom parameters, you can use special fields to append other details (such as the user id or the user's registration details) to your event.

You can append the following details to your events:

Field | Description |
------|-------------|
`fbid` | Facebook ID of the current user (if the user logged in using Facebook). |
`access_token` | A valid Facebook Access Token. |
`email` | The user's email. |
`idfa` | The user's IDFA (for iOS users). |
`android_id` | The user's Android ID (for Android users). |


{% highlight objc %}
[Adjust trackRevenue:10000 forEvent:@"checkout" withParameters:@{
  @"email": @"john.doe@example.com",
  @"skus": [@"SH-BL-M8", @"TR-WH-J3033"]
}];
{% endhighlight %}
