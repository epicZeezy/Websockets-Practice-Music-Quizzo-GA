from django.urls import path, re_path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from chat.views import index, hello, get_rooms_react, get_quiz_and_answers


urlpatterns = [
    path('', index),
    path('get-rooms/', get_rooms_react),
    path('accounts/login/', LoginView.as_view()),
    path('accounts/logout/', LogoutView.as_view()),
    path('admin/', admin.site.urls),
    path('hello/', hello),
    re_path(r'^generate-quiz/((?P<playlist_id>[a-zA-Z0-9_]*)/)?$', get_quiz_and_answers)
]
