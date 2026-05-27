from rest_framework import serializers
from .models import Project, Skill, Experience, ProfileInfo


class SkillSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Skill
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    
    class Meta:
        model = Project
        fields = '__all__'


class ProjectListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for project listing"""
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'subtitle', 'slug', 'short_description',
            'category', 'category_display', 'status', 'tech_stack',
            'is_featured', 'thumbnail', 'gradient_from', 'gradient_to',
            'modules_count', 'api_endpoints', 'github_url', 'live_url',
        ]


class ExperienceSerializer(serializers.ModelSerializer):
    type_display = serializers.CharField(source='get_type_display', read_only=True)
    
    class Meta:
        model = Experience
        fields = '__all__'


class ProfileInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileInfo
        fields = '__all__'
