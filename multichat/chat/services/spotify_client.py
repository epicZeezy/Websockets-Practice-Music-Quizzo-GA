import spotipy
import re
from spotipy.oauth2 import SpotifyClientCredentials
import os

# Work on getting spotify info in environment variables/settings so you don't hard code info
cid = os.environ.get("SPOTIPY_CLIENT_ID")
secret = os.environ.get("SPOTIPY_CLIENT_SECRET")
client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def get_playlists(playlist_name="spotify"):
    playlists = sp.user_playlists('spotify')
    return playlists

def search_artist(artist_name=None):
    results = sp.search(q='artist:' + artist_name, type='artist')
    items = results['artists']['items']
    if len(items) > 0:
        artist = items[0]
        return artist['name'], artist['images'][0]['url']

def get_playlist_tracks(playlist_search=None):
    results = sp.search(q=playlist_search, type='playlist')
    items = results['playlists']['items']
    if len(items) > 0:
        playlist = items[0]
        playlist_id = playlist['id']
        tracks = sp.playlist_tracks(playlist_id)["items"]
        return tracks[0]["track"]["preview_url"]


def get_playlist_given_id(playlist_id=None):
    # given url gets playlist tracks
    # first part after playlist/
    # using this example https://developer.spotify.com/console/get-playlist-tracks/?playlist_id=1ctP63MYjVwJEKl0yizN8B&market=&fields=&limit=&offset=
    response = sp.playlist_tracks(playlist_id)
    return response


def get_playlist_id_given_url(url=None):
    playlist_id = re.search('playlist/(.*?)\?', url).group(1)
    return playlist_id

