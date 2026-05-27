from django.db import models


class Skill(models.Model):
    """Technical skill model"""
    CATEGORY_CHOICES = [
        ('language', 'Programming Language'),
        ('framework', 'Framework'),
        ('database', 'Database'),
        ('devops', 'DevOps'),
        ('tool', 'Tool'),
        ('cloud', 'Cloud'),
        ('security', 'Security'),
        ('other', 'Other'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    proficiency = models.IntegerField(default=80, help_text="Proficiency level 0-100")
    icon = models.CharField(max_length=50, blank=True, help_text="Lucide icon name")
    color = models.CharField(max_length=20, blank=True, help_text="CSS color for the skill")
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['category', 'order']
    
    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"


class Project(models.Model):
    """Portfolio project model"""
    CATEGORY_CHOICES = [
        ('cybersecurity', 'Cybersecurity'),
        ('fullstack', 'Full-Stack'),
        ('devops', 'DevOps'),
        ('ai', 'AI/ML'),
        ('desktop', 'Desktop App'),
    ]
    
    STATUS_CHOICES = [
        ('completed', 'Completed'),
        ('in_progress', 'In Progress'),
        ('maintained', 'Actively Maintained'),
    ]
    
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=300, blank=True)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    short_description = models.CharField(max_length=500)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='completed')
    
    # Technical details
    tech_stack = models.JSONField(default=list, help_text="List of technologies used")
    features = models.JSONField(default=list, help_text="List of key features")
    architecture = models.TextField(blank=True, help_text="Architecture description")
    
    # Links
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    demo_video_url = models.URLField(blank=True)
    
    # Media
    thumbnail = models.CharField(max_length=500, blank=True, help_text="Thumbnail image URL or path")
    screenshots = models.JSONField(default=list, help_text="List of screenshot URLs")
    
    # Metrics
    modules_count = models.IntegerField(default=0)
    api_endpoints = models.IntegerField(default=0)
    
    # Metadata
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_date = models.DateField(null=True, blank=True)
    
    # Colors/Theme
    gradient_from = models.CharField(max_length=30, default='#6366f1')
    gradient_to = models.CharField(max_length=30, default='#8b5cf6')
    
    class Meta:
        ordering = ['order', '-created_date']
    
    def __str__(self):
        return self.title


class Experience(models.Model):
    """Work experience / education timeline"""
    TYPE_CHOICES = [
        ('work', 'Work Experience'),
        ('education', 'Education'),
        ('certification', 'Certification'),
        ('project', 'Major Project'),
    ]
    
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    highlights = models.JSONField(default=list)
    
    class Meta:
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.title} @ {self.organization}"


class ProfileInfo(models.Model):
    """Singleton model for profile information"""
    name = models.CharField(max_length=200, default="Mohamed Ashish Roshan")
    title = models.CharField(max_length=300, default="Full-Stack Developer & Security Engineer")
    tagline = models.TextField(default="Building enterprise-grade security platforms and full-stack applications")
    bio = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=200, blank=True)
    avatar_url = models.CharField(max_length=500, blank=True)
    resume_url = models.CharField(max_length=500, blank=True)
    
    # Social links
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    
    # Stats
    years_experience = models.IntegerField(default=2)
    projects_completed = models.IntegerField(default=4)
    technologies_used = models.IntegerField(default=20)
    
    class Meta:
        verbose_name = "Profile Info"
        verbose_name_plural = "Profile Info"
    
    def __str__(self):
        return self.name
