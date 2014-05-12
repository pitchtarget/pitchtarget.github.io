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
`message`  | The post content |
`link`  | The post&#39;s link |
`actions`  | The action links attached to the post |
`tag`  | Comma-separated list of user IDs of people tagged in this post |
`picture`  | URL of image to be used |
`targeting`  | Object that limits the audience for this content |
`feed_targeting`  | Object that controls news feed targeting for this content |

### Request

{% highlight http %}
POST /unpublished_page_posts HTTP/1.1
Accept: application/json
Authorization: OAuth 3lt70x9erlzqc5jx3w6p5qabq19o81s
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
page_id=205530782989409&message=This+is+an+example+post&link=http%3A%2F%2Fexample.com
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/unpublished_page_posts" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 3lt70x9erlzqc5jx3w6p5qabq19o81s" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'page_id=205530782989409&message=This+is+an+example+post&link=http%3A%2F%2Fexample.com'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "cf4e429e413e41aedaf9a1a34bd61c1e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: b5818b11-264e-4814-8e85-9a07a3a546f6
X-Runtime: 0.007588
Content-Length: 42
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "205530782989409_10152407579852577"
}
{% endhighlight %}

