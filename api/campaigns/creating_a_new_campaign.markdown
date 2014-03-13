---
layout: default
title: Campaigns API
---

# Campaigns API

## Creating a new campaign

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
`fb_app_id`  | Fb app id |
`play_url`  | Play store URL |
`itunes_url`  | iTunes URL |
`mobile_os`  | Mobile OS |
`mobile_device`  | Mobile device |
`mobile_wireless_carrier`  | Mobile wireless carrier |
`targets`  | Targets |
`creative_texts`  | Creative texts |
`creative_images`  | Creative images |

### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth dtzlndn91woftn2f5376ymp5e08p7q
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_account_id`

{% highlight text %}
689
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1155
{% endhighlight %}

##### `objective`

{% highlight text %}
MOBILE_APP_INSTALLS
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
1394726077
{% endhighlight %}

##### `fb_app_id`

{% highlight text %}
foo
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

##### `targets`

{% highlight json %}
[
  {
    "name": "FbTarget 1",
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
	-H "Authorization: OAuth dtzlndn91woftn2f5376ymp5e08p7q" \
	-H "Host: example.org" \
	-F 'fb_account_id=689' \
	-F 'fb_ad_account_id=1155' \
	-F 'objective=MOBILE_APP_INSTALLS' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"foo":"bar"}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1394726077' \
	-F 'fb_app_id=foo' \
	-F 'play_url=http://www.example.com' \
	-F 'itunes_url=http://ios.example.com' \
	-F 'mobile_os=["Android","iOS"]' \
	-F 'mobile_device=["android_smartphone","iphone"]' \
	-F 'mobile_wireless_carrier=["Wifi"]' \
	-F 'targets=[{"name":"FbTarget 1","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
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
ETag: "4812d3b9de59430f214e8fde73272be1"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7b7d7c1f-1852-41b6-b647-4bf5ff41c6dc
X-Runtime: 0.286570
Content-Length: 1005
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 211,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-13T15:54:37.000Z",
    "end_time": null,
    "objective": "MOBILE_APP_INSTALLS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 155,
        "creative_images": [
          {
            "id": 88,
            "image": "/uploads/ad_image/image/111/1200x627.png"
          }
        ],
        "creative_texts": [
          {
            "id": 89,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 122,
        "name": "FbTarget 1",
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
      "id": 1155,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "2"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

