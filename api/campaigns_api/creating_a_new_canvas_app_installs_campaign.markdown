---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new CANVAS_APP_INSTALLS campaign

### POST /campaigns


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |
`objective` (required) | Campaign objective |
`name` (required) | Campaign name |
`bid_type`  | Bid type |
`bid_info`  | Bid info |
`max_bid`  | Max bid |
`budget_type`  | Budget type |
`budget_amount`  | Budget amount |
`start_time`  | Start time |
`end_time`  | End time |
`targets`  | Targets |
`fb_app_id` (required) | Object story id |
`link_url`  | Link URL |
`url_tags`  | URL tags |
`creative_texts`  | Creative texts |
`creative_images`  | Creative images |

### Request

{% highlight http %}
POST /campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth 1mxm0l693vbmwani46iwo9byk17spq7
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_ad_account_id`

{% highlight text %}
63
{% endhighlight %}

##### `objective`

{% highlight text %}
CANVAS_APP_INSTALLS
{% endhighlight %}

##### `name`

{% highlight text %}
foo
{% endhighlight %}

##### `bid_type`

{% highlight text %}
ABSOLUTE_OCPM
{% endhighlight %}

##### `bid_info`

{% highlight json %}
{
  "ACTIONS": 100
}
{% endhighlight %}

##### `max_bid`

{% highlight text %}
100
{% endhighlight %}

##### `budget_type`

{% highlight text %}
daily
{% endhighlight %}

##### `budget_amount`

{% highlight text %}
100000
{% endhighlight %}

##### `start_time`

{% highlight text %}
1399020651
{% endhighlight %}

##### `targets`

{% highlight json %}
[
  {
    "name": "Mobile Games fans",
    "specs": {
      "age_min": 18,
      "age_max": 35,
      "geo_locations": {
        "countries": [
          "US"
        ]
      },
      "interests": [
        {
          "name": "Video games",
          "id": 6003940339466
        },
        {
          "name": "Browser games",
          "id": 6003434373937
        },
        {
          "name": "Casual game",
          "id": 6003102728434
        }
      ]
    }
  }
]
{% endhighlight %}

##### `fb_app_id`

{% highlight text %}
197838773569384
{% endhighlight %}

##### `link_url`

{% highlight text %}
http://www.example.com
{% endhighlight %}

##### `url_tags`

{% highlight text %}
from=facebook&action=play
{% endhighlight %}

##### `creative_texts`

{% highlight json %}
[
  {
    "title": "Awesome Game!",
    "body": "Have fun with our awesome game! Challenge your friends and beat them all!"
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 1mxm0l693vbmwani46iwo9byk17spq7" \
	-F 'fb_ad_account_id=63' \
	-F 'objective=CANVAS_APP_INSTALLS' \
	-F 'name=foo' \
	-F 'bid_type=ABSOLUTE_OCPM' \
	-F 'bid_info={"ACTIONS":100}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1399020651' \
	-F 'targets=[{"name":"Mobile Games fans","specs":{"age_min":18,"age_max":35,"geo_locations":{"countries":["US"]},"interests":[{"name":"Video games","id":6003940339466},{"name":"Browser games","id":6003434373937},{"name":"Casual game","id":6003102728434}]}}]' \
	-F 'fb_app_id=197838773569384' \
	-F 'link_url=http://www.example.com' \
	-F 'url_tags=from=facebook&action=play' \
	-F 'creative_texts=[{"title":"Awesome Game!","body":"Have fun with our awesome game! Challenge your friends and beat them all!"}]' \
	-F 'creative_images[]=@1200x627.jpg;type=text/plain'
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
ETag: "83093e548671a4d894dc0fb55a010a64"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: cc8dcf2f-8031-4433-8f30-2c84e70870c0
X-Runtime: 0.150273
Content-Length: 1065
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 6309,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "ABSOLUTE_OCPM",
    "max_bid": 100,
    "start_time": "2014-05-02T08:50:51.000Z",
    "end_time": null,
    "objective": "CANVAS_APP_INSTALLS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 4027,
        "creative_images": [
          {
            "id": 1579,
            "image": "/uploads/ad_image/image/2569/1200x627.jpg"
          }
        ],
        "creative_texts": [
          {
            "id": 1586,
            "title": "Awesome Game!",
            "name": null,
            "body": "Have fun with our awesome game! Challenge your friends and beat them all!"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 2349,
        "name": "Mobile Games fans",
        "favorite": false,
        "geo_locations": {
          "countries": [
            "US"
          ]
        },
        "excluded_geo_locations": null,
        "genders": null,
        "age_min": 18,
        "age_max": 35,
        "languages": null,
        "interested_in": null,
        "broad_age": null,
        "interests": [
          {
            "name": "Video games",
            "id": 6003940339466
          },
          {
            "name": "Browser games",
            "id": 6003434373937
          },
          {
            "name": "Casual game",
            "id": 6003102728434
          }
        ],
        "user_adclusters": null,
        "excluded_user_adclusters": null,
        "parent_fb_target": null
      }
    ],
    "fb_ad_account": {
      "id": 45392,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "63"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

