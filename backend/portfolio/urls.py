"""portfolio URL Configuration"""

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from projects.views import ProjectViewSet, SkillViewSet, ExperienceViewSet, profile_info, portfolio_stats
from contact.views import submit_contact

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'experience', ExperienceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/profile/', profile_info, name='profile-info'),
    path('api/stats/', portfolio_stats, name='portfolio-stats'),
    path('api/contact/', submit_contact, name='submit-contact'),
]
