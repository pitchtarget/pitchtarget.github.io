---
layout: default_with_nav
title: Authentication
section: Users API
nav: users_api_links.md
---

## Authenticate an existing user
Users API authentication is compatible with the OAuth 2.0 draft 10 protocol. In order to authenticate an existing user, you will need username, password and your client_id.

Upon successful authentication, Users API will return a user access_token that you will use for any subsequent requests towards any authenticated endpoint of Pitchtarget.

Please note that in order to fully use Pitchtarget, your user should authenticate with Facebook. For more details, follow the [Login Flow] documentation.

### POST /oauth/authorize


### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`username` | Yes | Username of this user. |
`password` | Yes | Password for this user (clear). |
`grant_type` | Yes | Grant type. The only allowed value is `password`. |
`client_id` | Yes | The ID that identifies your app. |

Note that only admin users can manage regular users. In order to log in as admin users, you should provide your Client ID as username and your Client Secret as password. You will still need to provide `grant_type` and `client_id`.

### Request

{% highlight http %}
POST /oauth/authorize HTTP/1.1
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie:

{% endhighlight %}

#### Body

{% highlight json %}
{
  "username": "user_1",
  "password": "password",
  "grant_type": "password",
  "client_id": "1bv9sh664cowghktxwn307wpeghj8e1"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "https://api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_1","password":"password","grant_type":"password","client_id":"1bv9sh664cowghktxwn307wpeghj8e1"}'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Cache-Control: no-store
Content-Type: application/json
ETag: "e9cca3bbf0aa4a21fb3f09160ba46079"
X-Request-Id: 55501b56-7f1f-4ad9-a1a2-17c54c84ab66
X-Runtime: 0.131968
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "j89n22wmadh8vkc5e6bwqey9tp42cdc"
}
{% endhighlight %}

{% include links.md %}
