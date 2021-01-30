from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Room
from django.http import JsonResponse
from chat.services.quiz_generate_service import generate_quiz_given_playlist_id
import time

@login_required
def index(request):
    """
    Root page view. This is essentially a single-page app, if you ignore the
    login and admin parts.
    """
    # Get a list of rooms, ordered alphabetically
    rooms = Room.objects.order_by("title")

    # Render that in the index template
    return render(request, "index.html", {
        "rooms": rooms,
    })


def get_rooms_react(request):
    rooms = Room.objects.order_by("title")
    json_rooms = []
    for room in rooms:
        json_rooms.append({"title": room.title, "id": room.id})

    # time.sleep(3)
    return JsonResponse({'data': json_rooms})

# get individual room with chat messages?


def get_quiz_and_answers(request, **kwargs):
    playlist_id = kwargs['playlist_id']
    track_preview_urls_and_quiz = generate_quiz_given_playlist_id(playlist_id)
    return JsonResponse({'data': track_preview_urls_and_quiz})


def hello(request):
    return JsonResponse({'data': 'I hdsssssssddddddddd!'})
