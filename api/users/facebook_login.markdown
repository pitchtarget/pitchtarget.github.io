---
layout: default
title: Login Flow - Users API
---

# Users API

## Login Flow
In order to use your app, you must make sure that your users are properly authenticated and connected to Facebook. This page will guide you through all the steps needed to authenticate the user with both Pitchtarget and Facebook.

### Step 1: create a new user
When your user signs up using your app, you will use Users API to create a new user.

{% highlight sh %}
curl "https://api.pitchtarget.com/sign-up" -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"g7kj2axpf13umghr5m9xl6aiordknff"}'
{% endhighlight %}

If the user does not exist, Users API will return a successful response:

{% highlight json %}
{
  "user": {
    "id": 814,
    "username": "username"
  }
}
{% endhighlight %}

### Step 2: Authentication
The next time that the users logs into you app, you will issue a call towards the `/oauth/authorize` endpoint.

{% highlight sh %}
curl "https://api.pitchtarget.com/oauth/authorize" -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" -d '{"username":"user_1","password":"password","grant_type":"password","client_id":"1bv9sh664cowghktxwn307wpeghj8e1"}'
{% endhighlight %}

If the user's login credentials are correct, you will see a response similar to the following:
{% highlight json %}
{
  "access_token": "j89n22wmadh8vkc5e6bwqey9tp42cdc"
}
{% endhighlight %}

You will use the user's `access_token` in order to perform any subsequent requests on behalf of the user.

### Step 3: Facebook Login
In order to manage the user's Facebook Ad Accounts and Pages, you will need the user to authorise the Pitchtarget app. Pitchtarget will need to operate with the user's Ad Accounts and Pages in order for your app to correctly interact with your users. This way you can make sure that Pitchtarget will handle the communication between Facebook and your app, so that you will not need to worry about implementing functionalities outside the Pitchtarget platform.

In order to authenticate the user with Facebook, you need to point the user to the following URL:

`https://api.pitchtarget.com/facebook/authorize_application?oauth_token=YOUR_ACCESS_TOKEN`

Replace `YOUR_ACCESS_TOKEN` with the `access_token` you obtained from Step 2. You can open a new window pointing to this URL, or you can use an `iframe`.

Upon successful authentication, your user will be able to use any Ad Account-related features of your app.
