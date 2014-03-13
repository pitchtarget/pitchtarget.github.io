---
layout: default
title: Campaigns API
---

# Campaigns API

## Creating a new MOBILE_APP_INSTALLS campaign

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
`targets`  | Targets |
`creative_texts`  | Creative texts |
`creative_images`  | Creative images |
`fb_app_id`  | Fb app id |
`play_url`  | Play store URL |
`itunes_url`  | iTunes URL |
`mobile_os`  | Mobile OS |
`mobile_device`  | Mobile device |
`mobile_wireless_carrier`  | Mobile wireless carrier |

### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth qqh82jn5dwk03z0yv08gm42boivoba
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_account_id`

{% highlight text %}
696
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1166
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
1394732143
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
	-H "Authorization: OAuth qqh82jn5dwk03z0yv08gm42boivoba" \
	-H "Host: example.org" \
	-F 'fb_account_id=696' \
	-F 'fb_ad_account_id=1166' \
	-F 'objective=MOBILE_APP_INSTALLS' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"foo":"bar"}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1394732143' \
	-F 'targets=[{"name":"FbTarget 2","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
	-F 'creative_texts=[{"title":"foo","body":"bar"}]' \
	-F 'creative_images[]=@1200x627.png;type=' \
	-F 'fb_app_id=foo' \
	-F 'play_url=http://www.example.com' \
	-F 'itunes_url=http://ios.example.com' \
	-F 'mobile_os=["Android","iOS"]' \
	-F 'mobile_device=["android_smartphone","iphone"]' \
	-F 'mobile_wireless_carrier=["Wifi"]'
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
ETag: "718ff7d6c448f7fb27f69632c0b10f5f"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: b264f29e-da18-4607-804f-e6d1ad63d871
X-Runtime: 0.051690
Content-Length: 1005
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 199,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-13T17:35:43.000Z",
    "end_time": null,
    "objective": "MOBILE_APP_INSTALLS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 143,
        "creative_images": [
          {
            "id": 78,
            "image": "/uploads/ad_image/image/101/1200x627.png"
          }
        ],
        "creative_texts": [
          {
            "id": 78,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 107,
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
      "id": 1166,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "4"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

