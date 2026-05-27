from rest_framework import viewsets, status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from .models import Project, Skill, Experience, ProfileInfo
from .serializers import (
    ProjectSerializer, ProjectListSerializer,
    SkillSerializer, ExperienceSerializer, ProfileInfoSerializer,
)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for projects"""
    queryset = Project.objects.all()
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectListSerializer
        return ProjectSerializer
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured = Project.objects.filter(is_featured=True)
        serializer = ProjectListSerializer(featured, many=True)
        return Response(serializer.data)


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for skills"""
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    pagination_class = None


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for experience/education"""
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    pagination_class = None


@api_view(['GET'])
def profile_info(request):
    """Get profile information"""
    profile = ProfileInfo.objects.first()
    if not profile:
        profile = ProfileInfo.objects.create()
    serializer = ProfileInfoSerializer(profile)
    return Response(serializer.data)


@api_view(['GET'])
def portfolio_stats(request):
    """Get portfolio statistics for the hero section"""
    stats = {
        'projects_count': Project.objects.count(),
        'skills_count': Skill.objects.count(),
        'total_modules': sum(p.modules_count for p in Project.objects.all()),
        'total_api_endpoints': sum(p.api_endpoints for p in Project.objects.all()),
    }
    profile = ProfileInfo.objects.first()
    if profile:
        stats['years_experience'] = profile.years_experience
        stats['technologies_used'] = profile.technologies_used
    return Response(stats)
