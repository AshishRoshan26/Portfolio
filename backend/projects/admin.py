from django.contrib import admin
from .models import Project, Skill, Experience, ProfileInfo


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'is_featured', 'order']
    list_filter = ['category', 'status', 'is_featured']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ['order', 'is_featured']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency', 'order']
    list_filter = ['category']
    list_editable = ['proficiency', 'order']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'organization', 'type', 'start_date', 'is_current']
    list_filter = ['type', 'is_current']


@admin.register(ProfileInfo)
class ProfileInfoAdmin(admin.ModelAdmin):
    pass
