const API_BASE = 'http://localhost:8000/api';

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/projects/`);
  if (!res.ok) throw new Error('Failed to fetch projects');
  const data = await res.json();
  return data.results || data;
}

export async function fetchProject(slug) {
  const res = await fetch(`${API_BASE}/projects/${slug}/`);
  if (!res.ok) throw new Error('Failed to fetch project');
  return res.json();
}

export async function fetchFeaturedProjects() {
  const res = await fetch(`${API_BASE}/projects/featured/`);
  if (!res.ok) throw new Error('Failed to fetch featured projects');
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch(`${API_BASE}/skills/`);
  if (!res.ok) throw new Error('Failed to fetch skills');
  return res.json();
}

export async function fetchExperience() {
  const res = await fetch(`${API_BASE}/experience/`);
  if (!res.ok) throw new Error('Failed to fetch experience');
  return res.json();
}

export async function fetchProfile() {
  const res = await fetch(`${API_BASE}/profile/`);
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
}

export async function fetchStats() {
  const res = await fetch(`${API_BASE}/stats/`);
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
}

export async function submitContact(data) {
  const res = await fetch(`${API_BASE}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
  return res.json();
}
