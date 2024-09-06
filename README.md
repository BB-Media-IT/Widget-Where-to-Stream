<p align="center">
<image
  src="https://github.com/BB-Media-IT/.github/assets/4085605/c08bf803-09ca-420c-b728-8f6ea85b3aa2"
  height=120
  margin=0>
</p>
  
# How to Integrate the BB Media Where To Stream Widget

This document provides instructions on how to integrate the Where To Stream widget into your website. The widget helps users find where to stream movies or series across different platforms.

## Integration Instructions
To add the widget to your website, follow these steps:

**Add the Widget Container**

1. **Insert the following HTML code into the desired location on your webpage**:
  ```html
  <div id="WhereToStream" 
       wts-id="" 
       wts-type="" 
       wts-country="" 
       wts-tag="">
  </div>
  ```
- `wts-id`: Provide the ID from the source (IMDb, TMDB, TVDB, EIDR, BB Media, Wikidata).
- `wts-type`: Specify the type of content (movie or series).
- `wts-country`: Enter the country code to find availability.
- `wts-tag`: Use a tag for referencing your site or partner using the widget.
  
2. **Include the Widget Script**
  Add the following script tag to your HTML, ideally before the closing `</body>` tag:

```<script src="https://bb-media.com/widgets/where_to_stream.js"></script>```

This script loads the widget functionality and ensures that it operates correctly on your page.

**Example**
Here is an example of how your HTML might look with the widget integrated:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Streaming Widget Example</title>
</head>
<body>
    <div id="WhereToStream" 
         wts-id="tt1234567" 
         wts-type="movie" 
         wts-country="US" 
         wts-tag="example-site">
    </div>

    <script src="https://bb-media.com/widgets/where_to_stream.js"></script>
</body>
</html>
```

## Customization
- `wts-id` : Replace with the appropriate ID from your data source.
- `wts-type`: Choose `movie` or `series` based on the content you want to display.
- `wts-country`: Use the ISO 3166-1 alpha-2 country code to specify the region.
- `wts-tag`: Provide a tag for tracking or referencing purposes.

## Support
For any issues or questions regarding the integration, please contact our support team at [support@bb-media.com](mailto:support@bb-media.com).

## License
This widget is provided under the MIT License. See the LICENSE file for more details.
