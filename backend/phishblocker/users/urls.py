from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import login, signup

urlpatterns = [
    path('login/', login , name='login'),
    path('signup/', signup, name='signup'),
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
