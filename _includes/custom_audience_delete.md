`DELETE /custom_audiences/:id`

#### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`id` | Yes | The ID of the audience to delete |

#### Request
{% highlight sh %}
curl "{{site.base_url}}/custom_audiences/57" -X DELETE \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "Authorization: OAuth 4w8yyeszjwt5vvnvodjaamabfcx0ybp" -d '{}'
{% endhighlight %}

#### Response
{% highlight json %}
{
  "fb_custom_audience": {
    "id": 57,
    "name": "Spending users",
    "description": null,
    "opt_out_link": "http://www.myshop.com/opt_out",
    "user_type": "email_hash",
    "fb_id": null
  }
}
{% endhighlight %}
