---
layout: default_with_nav
title: Authenticate an existing user
section: Users API
nav: nav_users_api.md
---

## {{page.title}}
Users API authentication is compatible with the OAuth 2.0 draft 10 protocol. In order to authenticate an existing user, you will need username, password and your client_id.

Upon successful authentication, Users API will return a user access_token that you will use for any subsequent requests towards any authenticated endpoint of Pitchtarget.

Please note that in order to fully use Pitchtarget, your user should also authenticate with Facebook. For more details, follow the [Login Flow] documentation.

### Authentication
`POST /oauth/authorize`

### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`username` | Yes | Username of this user. |
`password` | Yes | Password for this user (clear). |
`grant_type` | Yes | Grant type. The only allowed value is `password`. |
`client_id` | Yes | The ID that identifies your app. |

Note that only admin users can manage regular users. In order to log in as admin users, you should provide your Client ID as username and your Client Secret as password. You will still need to provide `grant_type` and `client_id`.

#### Request

{% highlight sh %}
curl "{{site.base_url}}/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_1","password":"password","grant_type":"password","client_id":"1bv9sh664cowghktxwn307wpeghj8e1"}'
{% endhighlight %}

#### Response

{% highlight json %}
{
  "access_token": "j89n22wmadh8vkc5e6bwqey9tp42cdc"
}
{% endhighlight %}

{% include links.md %}
