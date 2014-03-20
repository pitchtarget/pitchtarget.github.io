---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new MOBILE_APP_ENGAGEMENT campaign

### POST /api/campaigns


### Parameters

Name | Description |
-----|-------------|
`fb_account_id` (required) | FbAccount id |
`fb_ad_account_id` (required) | FbAdAccount id |
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
`fb_app_id`  | Fb app id |
`object_story_id`  | Object story id |
`url_tags`  | URL tags |
`call_to_action_type`  | Call to action type |
`link_deep_link_url`  | Link deep link URL |
`play_url`  | Play store URL |
`itunes_url`  | iTunes URL |
`mobile_os`  | Mobile OS |
`mobile_device`  | Mobile device |
`mobile_wireless_carrier`  | Mobile wireless carrier |
`creative_texts`  | Creative texts |
`creative_images`  | Creative images |

### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth 28l4093p63b85azll124m3qp4vqgrrv
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_account_id`

{% highlight text %}
923
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1521
{% endhighlight %}

##### `objective`

{% highlight text %}
MOBILE_APP_ENGAGEMENT
{% endhighlight %}

##### `name`

{% highlight text %}
foo
{% endhighlight %}

##### `bid_type`

{% highlight text %}
OCPM
{% endhighlight %}

##### `bid_info`

{% highlight json %}
{
  "foo": "bar"
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
1395328870
{% endhighlight %}

##### `targets`

{% highlight json %}
[
  {
    "name": "FbTarget 2",
    "specs": {
      "age_min": 18,
      "age_max": 25,
      "genders": [
        "2"
      ],
      "geo_locations": {
        "countries": [
          "IT",
          "US"
        ]
      },
      "interests": [
        {
          "id": "1",
          "name": "playstation"
        },
        {
          "id": "2",
          "name": "videogame"
        },
        {
          "id": "3",
          "name": "xbox"
        }
      ],
      "user_adclusters": [
        {
          "id": "1",
          "name": "HTC"
        },
        {
          "id": "2",
          "name": "Motorola"
        },
        {
          "id": "3",
          "name": "Samsung"
        }
      ],
      "languages": [
        "EN"
      ],
      "broad_age": false,
      "interested_in": [
        "2"
      ]
    },
    "favorite": false
  }
]
{% endhighlight %}

##### `fb_app_id`

{% highlight text %}
foo
{% endhighlight %}

##### `object_story_id`

{% highlight text %}
foo
{% endhighlight %}

##### `url_tags`

{% highlight text %}
bar
{% endhighlight %}

##### `call_to_action_type`

{% highlight text %}
SHOP_NOW
{% endhighlight %}

##### `link_deep_link_url`

{% highlight text %}
http://foo/bar
{% endhighlight %}

##### `play_url`

{% highlight text %}
http://www.example.com
{% endhighlight %}

##### `itunes_url`

{% highlight text %}
http://ios.example.com
{% endhighlight %}

##### `mobile_os`

{% highlight json %}
[
  "Android",
  "iOS"
]
{% endhighlight %}

##### `mobile_device`

{% highlight json %}
[
  "android_smartphone",
  "iphone"
]
{% endhighlight %}

##### `mobile_wireless_carrier`

{% highlight json %}
[
  "Wifi"
]
{% endhighlight %}

##### `creative_texts`

{% highlight json %}
[
  {
    "title": "foo",
    "body": "bar"
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "pitchtarget.com/api/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 28l4093p63b85azll124m3qp4vqgrrv" \
	-F 'fb_account_id=923' \
	-F 'fb_ad_account_id=1521' \
	-F 'objective=MOBILE_APP_ENGAGEMENT' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"foo":"bar"}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1395328870' \
	-F 'targets=[{"name":"FbTarget 2","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
	-F 'fb_app_id=foo' \
	-F 'object_story_id=foo' \
	-F 'url_tags=bar' \
	-F 'call_to_action_type=SHOP_NOW' \
	-F 'link_deep_link_url=http://foo/bar' \
	-F 'play_url=http://www.example.com' \
	-F 'itunes_url=http://ios.example.com' \
	-F 'mobile_os=["Android","iOS"]' \
	-F 'mobile_device=["android_smartphone","iphone"]' \
	-F 'mobile_wireless_carrier=["Wifi"]' \
	-F 'creative_texts=[{"title":"foo","body":"bar"}]' \
	-F 'creative_images[]=@1200x627.png;type='
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
ETag: "f04b5d971bd24931c3027430af14193f"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 53ef7c43-d63a-4a32-97c8-29876ad33a89
X-Runtime: 0.044874
Content-Length: 1010
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 286,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-20T15:21:10.000Z",
    "end_time": null,
    "objective": "MOBILE_APP_ENGAGEMENT",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 218,
        "creative_images": [
          {
            "id": 100,
            "image": "/uploads/ad_image/image/148/1200x627.png"
          }
        ],
        "creative_texts": [
          {
            "id": 100,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 132,
        "name": "FbTarget 2",
        "favorite": false,
        "geo_locations": {
          "countries": [
            "IT",
            "US"
          ]
        },
        "excluded_geo_locations": null,
        "genders": [
          "2"
        ],
        "age_min": 18,
        "age_max": 25,
        "languages": [
          "EN"
        ],
        "interested_in": [
          "2"
        ],
        "broad_age": false,
        "interests": [
          {
            "id": "1",
            "name": "playstation"
          },
          {
            "id": "2",
            "name": "videogame"
          },
          {
            "id": "3",
            "name": "xbox"
          }
        ],
        "user_adclusters": [
          {
            "id": "1",
            "name": "HTC"
          },
          {
            "id": "2",
            "name": "Motorola"
          },
          {
            "id": "3",
            "name": "Samsung"
          }
        ],
        "excluded_user_adclusters": null,
        "parent_fb_target": null
      }
    ],
    "fb_ad_account": {
      "id": 1521,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "4"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

