---
layout: default
title: Using the Web Tracking Pixel - Tracking API
---

# Tracking API

### Using the Web Tracking Pixel
Use the Web Tracking Pixel in order to track user generated events in your website. This will allow you to keep track of conversion events such as registrations, purchases and signups.

## How to use the pixel

As with other tracking pixels, you can include it as an `<img>` in the `<body>` of your HTML page. We recommend to include it as the first element of the page to make sure that every event is properly tracked before any other resource is served.

To ensure that the pixel will not break your layout, the image will render as a 1x1 transparent GIF.

Make sure you obtained an app token before including the pixel.

## Including the pixel in your page
Prepare an `<img>` tag just like this:

{% highlight html %}
<img src="https://tracking-api.pitchtarget.com/YOUR_APP_TOKEN/EVENT_CATEGORY.gif?event_token=EVENT_TOKEN&params=JSON_ENCODED_CUSTOM_PARAMS&amount=AMOUNT" />
{% endhighlight %}

With the following parameters:

|Parameter | Required? | Description|
|--------- | --------- | -----------|
|`YOUR_APP_TOKEN`|Yes|The app token to identify your app.|
|`EVENT_CATEGORY.gif`|Yes|The name of the event. It can be either `revenue` (useful to track revenue-related events) or `event` (to track any other events)|
|`event_token`|Yes|A string that describes your event. For instance, if you are tracking via `revenue.gif`, you can assign `event_token=checkout` to identify this revenue event as a completed purchase.|
|`amount`|Only if `EVENT_CATEGORY` is `purchase`|An integer event with the amount of the revenue event, expressed in cents. For instance, to track a revenue event of USD 25, specify 2500.|
|`params`|No|A JSON-encoded dictionary of custom values. You can use this parameter to track any other details, such as the user account, current page or signup method. Although not required, we recommend to use a Base64-encoded JSON dictionary.|

### Notes on required fields
If `YOUR_APP_TOKEN` or `EVENT_CATEGORY` are missing, the GIF will not load. If any other required parameter is missing, the GIF will load but the event logging will fail gracefully.

### Field names in `params`
The `params` field will not accept any field that starts with `$`, `_` or that contains `.`. These fields are simply ignored if you send them along.

### Special properties in `params`
If you want to track user profiles along with events, use the one or more of the following special properties:

|Field |  Description|
|:-----|:-----------|
|`email`|Match the current user with this email|
|`uuid`|A unique identifier. We will generate one by default, but you can use your own.|
|`fbid`|The Facebook ID of the current user. Must be numeric (usernames are not accepted).|
|`access_token`|A valid Facebook access token. We will resolve it to a valid user. It will also automatically generate a Facebook Third party Custom Audience user.|


## Examples
### Track user signup
To track user signup, prepare a JSON object like this:
{% highlight json %}
{"method": "email", "page": "signup.html", "email": "john.doe@example.com"}
{% endhighlight %}
Convert it into an URLencoded string or a Base64 string. We will use Base64.

{% highlight html %}
<img src="https://tracking-api.pitchtarget.com/52fb5565a7b23ec66fad3988/event.gif?event_token=signup&params=eyJtZXRob2QiOiJlbWFpbCIsInBhZ2UiOiJzaWdudXAuaHRtbCIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20ifQ==" />
{% endhighlight %}

This will automatically assign the email `john.doe@example.com` to the user that is currently visiting your page. You can add more parameters later on, and we will add them to the ones you alredy sent.

### Track revenue events

In this example we will track a purchase event of USD 25.00 made by `john.doe@example.com`. You do not need to send John's email again because you already tracked him on signup.

Use an image tag like this:
{% highlight html %}
<img src="https://tracking-api.pitchtarget.com/52fb5565a7b23ec66fad3988/revenue.gif?event_token=purchase&amount=2500" />
{% endhighlight %}
