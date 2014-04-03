---
layout: default_with_nav
title: Login Flow
section: Users API
nav: users_api_links.md
---

## Login Flow
When you design your app, you must take into account that users need to be properly authenticated with your app. They also need to authorise Facebook to access their ad accounts and pages in order to create and manage their marketing campaigns. It is important that you design your login experience to be easy to understand for the user.

This guide will help you understand and implement a suggested login flow that will require your users to authenticate with your app and to authorise Facebook.

### Understand your login architecture
It is important to underline that the login flow will involve three parties:

* **Your app.** You should develop an interface to prompt users for their credentials, and to show errors (such as wrong passwords).
* **Facebook.** Your users will need to go through a Facebook Login in order for you to interact with the user's Pages and Ad Accounts.
* **Users API.** Pitchtarget will hold your user's details on behalf of your app, and it will update the autorisation status if needed.

While the login flow will always be handled between your app and Pitchtarget, you allow you users to use Facebook Login when they log into your app for the first time.

![Pitchtarget Login Architecture](/imgs/login_architecture.png)

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

In order to authenticate the user with Facebook, you need to invoke the OAuth dialog by pointing the user to the following URL:

{% highlight html %}
https://api.pitchtarget.com/facebook/oauth_dialog?oauth_token=PITCHTARGET_USER_TOKEN&redirect_uri=YOUR_REDIRECT_URI
{% endhighlight %}

Replace `PITCHTARGET_USER_TOKEN` with the `access_token` you obtained from Step 2.

You must also specify a URL for the `redirect_uri` parameter. This URL will capture the response from the login dialog, so that you can handle success or errors according to the login status as reported by Facebook.

When you invoke that URL, Pitchtarget will redirect the user to Facebook:

<img src="/imgs/facebook_oauth_dialog.jpg" alt="Facebook OAuth dialog" width="714" height="549" style="display:block;margin: 0 auto" />

On either success or failure, the user will then be redirected to your `redirect_uri`, and we will append the following paramters in your query string depending on the outcome of the flow.

**Success parameters**

Parameter | Description |
----------|-------------|
`status` | `success` |

**Success URI example**

{% highlight html %}
http://example.com/pitchtarget_response?status=success&access_token=CAACEdEose1cBAHBkLpYGvTOL6tYfJmnXCN7AEGX3irH2J3D2Nqe6GiP7doC1AkgAOzrKXZCrQlPGhhKGsDt9HbK05bRZCaIEe58IE1HHjm2NJOjZAo5TnbqHeVAg0lRRYvwC9hZB03xZAKZA5fquxJdpak0uE4Gyg6ZB1wVCNpsSEW9ZBhvMLTCvxZBv3TFKNxgEZD
{% endhighlight %}


**Error parameters**

Parameter | Description |
----------|-------------|
`status` | `error` |
`error` | String code that describes the error. |
`error_reason` | String code relative to the error. |
`error_description` | String with a human readable description of the error. |

**Error URI example**

{% highlight html %}
http://example.com/pitchtarget_response?status=error&error=access_denied&error_reason=user_denied&error_description=The+user+denied+your+request.
{% endhighlight %}
