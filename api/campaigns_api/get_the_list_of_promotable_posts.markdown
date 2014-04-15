---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Get the list of promotable posts

### GET /promotable_posts


### Parameters

Name | Description |
-----|-------------|
`page_id` (required) | The ID of the Facebook Page |

### Request

{% highlight http %}
GET /promotable_posts?page_id=205530782989409 HTTP/1.1
Accept: application/json
Authorization: OAuth aexzftd4pg2zbfjcjxe1yw6khmgmc40
Host: example.org
Cookie: 
page_id: 205530782989409
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/promotable_posts?page_id=205530782989409" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth aexzftd4pg2zbfjcjxe1yw6khmgmc40"
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
ETag: "a9030c9dea89f0cb67930867f2a46c74"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 693dea94-859b-49ed-826c-5c2616ed9580
X-Runtime: 0.010082
Content-Length: 3036
{% endhighlight %}

#### Body

{% highlight json %}
[
  {
    "id": "205530782989409_206938602848627",
    "from": {
      "category": "Just for fun",
      "name": "Vodka Tonic",
      "id": "205530782989409"
    },
    "story": "Vodka Tonic added a new photo.",
    "story_tags": {
      "0": [
        {
          "id": "205530782989409",
          "name": "Vodka Tonic",
          "offset": 0,
          "length": 11,
          "type": "page"
        }
      ]
    },
    "picture": "https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/t1.0-0/1798536_206938576181963_100275456_s.jpg",
    "link": "https://www.facebook.com/ilvodkatonic/photos/a.205532639655890.1073741827.205530782989409/206938576181963/?type=1&relevant_count=1",
    "icon": "https://fbstatic-a.akamaihd.net/rsrc.php/v2/yx/r/og8V99JVf8G.gif",
    "actions": [
      {
        "name": "Comment",
        "link": "https://www.facebook.com/205530782989409/posts/206938602848627"
      },
      {
        "name": "Like",
        "link": "https://www.facebook.com/205530782989409/posts/206938602848627"
      }
    ],
    "privacy": {
      "description": "Public",
      "value": "EVERYONE",
      "friends": "",
      "networks": "",
      "allow": "",
      "deny": ""
    },
    "type": "photo",
    "status_type": "added_photos",
    "object_id": "206938576181963",
    "created_time": "2014-03-21T23:47:43+0000",
    "updated_time": "2014-03-21T23:47:43+0000",
    "is_published": true,
    "likes": {
      "data": [
        {
          "id": "687292576",
          "name": "Matt Eo"
        }
      ],
      "paging": {
        "cursors": {
          "after": "Njg3MjkyNTc2",
          "before": "Njg3MjkyNTc2"
        }
      }
    }
  },
  {
    "id": "205530782989409_205532642989223",
    "from": {
      "category": "Just for fun",
      "name": "Vodka Tonic",
      "id": "205530782989409"
    },
    "story": "Vodka Tonic added a new photo.",
    "story_tags": {
      "0": [
        {
          "id": "205530782989409",
          "name": "Vodka Tonic",
          "offset": 0,
          "length": 11,
          "type": "page"
        }
      ]
    },
    "picture": "https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-0/1187116_205532586322562_2056609002_s.jpg",
    "link": "https://www.facebook.com/ilvodkatonic/photos/a.205532639655890.1073741827.205530782989409/205532586322562/?type=1&relevant_count=1",
    "icon": "https://fbstatic-a.akamaihd.net/rsrc.php/v2/yx/r/og8V99JVf8G.gif",
    "actions": [
      {
        "name": "Comment",
        "link": "https://www.facebook.com/205530782989409/posts/205532642989223"
      },
      {
        "name": "Like",
        "link": "https://www.facebook.com/205530782989409/posts/205532642989223"
      }
    ],
    "privacy": {
      "description": "Public",
      "value": "EVERYONE",
      "friends": "",
      "networks": "",
      "allow": "",
      "deny": ""
    },
    "type": "photo",
    "status_type": "added_photos",
    "object_id": "205532586322562",
    "created_time": "2014-03-16T16:59:59+0000",
    "updated_time": "2014-03-16T16:59:59+0000",
    "is_published": true,
    "likes": {
      "data": [
        {
          "id": "687292576",
          "name": "Matt Eo"
        }
      ],
      "paging": {
        "cursors": {
          "after": "Njg3MjkyNTc2",
          "before": "Njg3MjkyNTc2"
        }
      }
    }
  },
  {
    "id": "205530782989409_205530799656074",
    "from": {
      "category": "Just for fun",
      "name": "Vodka Tonic",
      "id": "205530782989409"
    },
    "story": "Vodka Tonic joined Facebook.",
    "story_tags": {
      "0": [
        {
          "id": "205530782989409",
          "name": "Vodka Tonic",
          "offset": 0,
          "length": 11,
          "type": "page"
        }
      ]
    },
    "actions": [
      {
        "name": "Comment",
        "link": "https://www.facebook.com/205530782989409/posts/205530799656074"
      },
      {
        "name": "Like",
        "link": "https://www.facebook.com/205530782989409/posts/205530799656074"
      }
    ],
    "privacy": {
      "value": ""
    },
    "type": "status",
    "application": {
      "name": "Reviews",
      "id": "6261817190"
    },
    "created_time": "2014-03-16T16:50:36+0000",
    "updated_time": "2014-03-16T16:50:36+0000",
    "is_published": true
  }
]
{% endhighlight %}

