---
layout: default_with_nav
title: Custom Audiences
section: Audiences API
nav: nav_audiences_api.md
---

## {{page.title}}
Custom Audiences allow advertisers to target a precise set of people based on data such as CRM activity.

### Create a custom Audience
`POST /custom_audiences`

#### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | The Ad Account in which this Custom Audience will be created. |
`name` | Yes | Name of this Custom Audience. |
`user_type` | Yes | The type of data the user is uploading. It must be one of `email_hash`, `phone_hash`, `fbid`, `custom_audience_third_party_id`, `mobile_advertiser_id`. For more details, refer to [Uploading the audience file](#uploading_the_audience_file). |
`file` | Yes | The file containing the custom audience. The file must contain one entry per line and each entry should be hashed. For more details, refer to [Uploading the audience file](#uploading_the_audience_file). |
`description` | No | A text description of the custom audience. |
`opt_out_link` | No | Your opt-out URL so users can choose not to be targeted. For more details, refer to [Privacy](#privacy). |

#### Request

{% highlight sh %}
curl "{{site.base_url}}/custom_audiences" -X POST \
  -H "Accept: application/json" \
  -H "Authorization: OAuth 4w8yyeszjwt5vvnvodjaamabfcx0ybp" \
  -F 'fb_ad_account_id=32' \
  -F 'name=Spending users' \
  -F 'description=Users who bought something on my site' \
  -F 'opt_out_link=http://www.myshop.com/opt_out' \
  -F 'user_type=email_hash' \
  -F 'file=@spending_users.csv;type=text/plain'
{% endhighlight %}

#### Response

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 59,
    "name": "Spending users",
    "description": null,
    "opt_out_link": "http://www.myshop.com/opt_out",
    "user_type": "email_hash",
    "fb_id": 6017382038943
  }
}
{% endhighlight %}

### Add users to an existing Custom Audience
You can insert new users to an existing Custom Audience by uploading a new file containing one user per line, just like you would do when creating a new Custom Audience. For more details on the contents of the file, refer to [Uploading the audience file](#uploading_the_audience_file).

`PUT /custom_audiences/:id`

Name | Required? | Description |
-----|-----------|-------------|
`id` | Yes | ID of the Custom Audiences being updated |
`file` | Yes | The file containing the custom audience. The file must contain one entry per line and each entry should be hashed. For more details, refer to [Uploading the audience file](#uploading_the_audience_file). |

#### Request

{% highlight sh %}
curl "{{site.base_url}}/custom_audiences/59" -X PUT \
  -H "Accept: application/json" \
  -H "Authorization: OAuth 4w8yyeszjwt5vvnvodjaamabfcx0ybp" \
  -F 'file=@spending_users.csv;type=text/plain'
{% endhighlight %}

#### Response

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 59,
    "name": "Spending users",
    "description": null,
    "opt_out_link": "http://www.myshop.com/opt_out",
    "user_type": "email_hash",
    "fb_id": 6017382038943
  }
}
{% endhighlight %}


### List Custom Audiences for a user
{% include custom_audience_get.md %}

### Obtain details about a Custom Audience
{% include custom_audience_get_id.md %}

### Delete a Custom Audience
{% include custom_audience_delete.md %}


### Uploading the audience file
This endpoint accepts a plain text file containing the users that will be included in this audience. (one entry per line). Your user can insert in the file the following type of data:

`user_type` | Requires hash | Description |
------------|---------------|-------------|
`email_hash` | Yes | Email addresses |
`phone_hash` | Yes | Phone numbers in international format with country code and without international prefixes such as `+` or `00` |
`fbid` | No | Facebook IDs (the numeric ID) |
`custom_audience_third_party_id` | No | A Mobile Custom Audience that can be generated using the Pitchtarget SDK or the Facebook SDK |
`mobile_advertiser_id` | No | Apple IDFA or Android ID |

**Important** Make sure that the file your user is uploading contains the specified `user_type`, otherwise, and empty custom audience will be created.

Each line must be normalised to trim whitespaces and to uniform the letter casing, and if needed it must be hashed using a SHA-256 algorithm.

### Privacy
In order to use Audiences API, you must make sure that your user's audience data can be used for targeting purposes. Your users must make sure that their Privacy Policy allows retargeting users for marketing purposes. Pitchtarget cannot be held responsible for any actions related to the final user's wrongdoing with Privacy Policies or Terms of Services.

If they did not already did so, your end user must also accept Facebook's Terms of Services before proceeding, otherwise this endpoint will return an error.

In order to agree to Facebook's [Custom Audiences Terms of Service], your users must follow the following steps.
1. Open the Audiences Section in Facebook's [Ads Manager].
1. Click "Create Audience".
1. Make sure you agree to the Terms of Service.

### Offer users the ability to opt out
When your users create an audience, we suggest that you prompt them to use an `opt_out_link` in order to give their audience the ability to avoid being targeted. You should also make sure that opted out users are removed from any audience your users will create in the future.

[Custom Audiences]: https://developers.facebook.com/docs/reference/ads-api/custom-audience-targeting/
[Custom Audiences Terms of Service]: https://www.facebook.com/ads/manage/customaudiences/tos.php
[Ads Manager]: https://www.facebook.com/ads/manage/audiences.php
