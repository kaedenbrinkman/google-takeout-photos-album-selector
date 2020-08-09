# Google Takeout -> Google Photos -> Album Selector

Google Takout is currently the only way to export the entirety of your Google Photos data. However, there is a limitation in that you only have 7 days to download each export before it expires and the maximum file size of each .zip file that you download is 50 GB.

The solution to this problem is to download several photo albums at a time. However, if you're like me, there are several thousand of these albums in the list and you can't even Shift + Click to select multiple. So, you are left clicking around and individually selecting a few dozen albums at a time to export.

This function will let you just enter some text (e.g. a year) and then automatically select all albums where that text is in its name.

## Usage
Navigate to Google Takeout (https://takeout.google.com/) and create a new export. Then deselect all products except for Google Photos and under Google Photos click the button that says "all photo albums selected" to open the selection window.
Press Ctrl + Shift + J to open the console, and copy the code from src/script.js into your console window. Now, you can simply type selectAlbums("2015"); to select all albums containing the text "2015", etc.

Note that for me I still have to select at least one of the albums manually to activate the Next button. You can just select and then deselect a random album.

I also haven't tested this on any other computers besides my own, and Google could change the code at any point and this function could stop working. Let me know if it isn't working, but just note that this code isn't guaranteed and is only published in case someone might find it helpful.
