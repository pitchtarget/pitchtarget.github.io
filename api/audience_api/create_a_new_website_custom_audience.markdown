---
layout: default
title: Audience API API
---

# Audience API API

## Create a new website custom audience

### POST /websitecustomaudiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the website custom audience |
`retention_days` (required) | Number of days to keep the user in this cluster (between 1 and 180 days) |
`rule` (required) | A JSON object representing audience rules to be applied on the referrer URL |

### Request

{% highlight http %}
POST /websitecustomaudiences HTTP/1.1
Accept: application/json
Authorization: OAuth s5fxtmipsar1yoklfq03eagrtczo096
Content-Type: application/json
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_account_id": "10",
  "name": "Users that put items in the car",
  "retention_days": 15,
  "rule": "{\"url\":{\"i_contains\":\"cart\"}}"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/websitecustomaudiences" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth s5fxtmipsar1yoklfq03eagrtczo096" \
	-H "Content-Type: application/json" -d '{"fb_ad_account_id":"10","name":"Users that put items in the car","retention_days":15,"rule":"{\"url\":{\"i_contains\":\"cart\"}}"}'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "60669f217459b9091f02a9c0f24942a7"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 3a774c4c-719c-43f3-b0c9-cbfa6da9a07e
X-Runtime: 0.021372
Content-Length: 22
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "6006183285954"
}
{% endhighlight %}

