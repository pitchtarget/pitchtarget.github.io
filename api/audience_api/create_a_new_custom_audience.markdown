---
layout: default
title: Audience API API
---

# Audience API API

## Create a new custom audience

### POST /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the custom audience |
`subtype` (required) | The subtype for the custom audience |
`description`  | A description of the custom audience |
`opt_out_link`  | Your opt-out URL so users can choose not to be targeted |
`user_type` (required) | The type of user info provided. It must be one of: email_hash, phone_hash, custom_audience_third_party_id, mobile_advertiser_id |
`file` (required) | A file with the SHA256-hashed users data: one user per line |

### Request

{% highlight http %}
POST /custom_audiences HTTP/1.1
Accept: application/json
Authorization: OAuth v68ueqm33t7ardrhcj89szkihqgk4k
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_ad_account_id`

{% highlight text %}
45
{% endhighlight %}

##### `name`

{% highlight text %}
Spending users
{% endhighlight %}

##### `subtype`

{% highlight text %}
CUSTOM
{% endhighlight %}

##### `description`

{% highlight text %}
Users who bought something on my site
{% endhighlight %}

##### `opt_out_link`

{% highlight text %}
http://www.myshop.com/opt_out
{% endhighlight %}

##### `user_type`

{% highlight text %}
email_hash
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth v68ueqm33t7ardrhcj89szkihqgk4k" \
	-F 'fb_ad_account_id=45' \
	-F 'name=Spending users' \
	-F 'subtype=CUSTOM' \
	-F 'description=Users who bought something on my site' \
	-F 'opt_out_link=http://www.myshop.com/opt_out' \
	-F 'user_type=email_hash' \
	-F 'file=@spending_users.csv;type=text/plain'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "5b9e54db1e99a1425e9ca61a12e31179"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 59b1de27-54bf-4f70-b1c3-62f4eecddea2
X-Runtime: 0.044983
Content-Length: 194
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 1240,
    "name": "Spending users",
    "fb_id": "fb_id",
    "subtype": "CUSTOM",
    "description": "Users who bought something on my site",
    "opt_out_link": "http://www.myshop.com/opt_out"
  }
}
{% endhighlight %}

