from chat.services import spotify_client


def generate_quiz_given_playlist_id(playlist_id):
    spotify_info = spotify_client.get_playlist_given_id(playlist_id)
    items = spotify_info["items"]
    track_preview_url_list = []
    for track in items:
        preview_url = track["track"]["preview_url"]
        artist_name = track["track"]["artists"][0]['name'].lower()
        image_url = track["track"]["album"]["images"][0]["url"]
        if preview_url:
            preview_question_answer = {"preview_question": preview_url,
                                       "answer": artist_name,
                                       "image": image_url}
            track_preview_url_list.append(preview_question_answer)

    return track_preview_url_list
