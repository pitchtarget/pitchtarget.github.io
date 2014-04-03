---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Create a new unpublished post for page &#39;205530782989409&#39;

### POST /unpublished_page_posts


### Parameters

Name | Description |
-----|-------------|
`page_id` (required) | The Facebook Page ID |
`messgae`  | The post content |
`link`  | The post&#39;s link |
`actions`  | The action links attached to the post |
`tag`  | Comma-separated list of user IDs of people tagged in this post |
`object_attachment`  | Facebook ID for an existing picture in the person&#39;s photo albums to use as the thumbnail image |
`targeting`  | Object that limits the audience for this content |
`feed_targeting`  | Object that controls news feed targeting for this content |

### Request

{% highlight http %}
POST /unpublished_page_posts HTTP/1.1
Accept: application/json
Authorization: OAuth nqvcm96f8svtbyyq8wctfu4bw29uqk3
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
page_id=205530782989409&link=http%3A%2F%2Fexample.com
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/unpublished_page_posts" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth nqvcm96f8svtbyyq8wctfu4bw29uqk3" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'page_id=205530782989409&link=http%3A%2F%2Fexample.com'
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
Content-Type: application/json; charset=utf-8
ETag: "cf4e429e413e41aedaf9a1a34bd61c1e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 4424ba7f-7d8c-4c19-9d4c-21a3119b50d4
X-Runtime: 0.006004
Content-Length: 42
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "205530782989409_10152407579852577"
}
{% endhighlight %}

