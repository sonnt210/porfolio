/** Chỉnh sửa file này để cập nhật nội dung portfolio. */

export const profile = {
  name: 'Sona',
  role: 'Backend Developer',
  tagline:
    'Xây API vững chắc, hệ thống dễ vận hành — Laravel, FastAPI và Docker.',
  email: 'hello@example.com',
  location: 'Việt Nam',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
  },
  about: [
    'Mình là Backend Developer, tập trung vào API, dữ liệu và triển khai bằng Docker. Mục tiêu là viết code rõ ràng, dễ bảo trì và sẵn sàng lên production.',
    'Stack chính: PHP Laravel và Python FastAPI. Mình quan tâm performance, bảo mật cơ bản và cách đóng gói ứng dụng để chạy ổn định trên WSL lẫn server thật.',
  ],
  skills: [
    {
      group: 'Backend',
      items: ['PHP / Laravel', 'Python / FastAPI', 'REST API', 'Auth & JWT'],
    },
    {
      group: 'Database',
      items: ['MySQL', 'PostgreSQL', 'Redis', 'Query optimization'],
    },
    {
      group: 'DevOps',
      items: ['Docker', 'Docker Compose', 'Nginx', 'Linux / WSL'],
    },
    {
      group: 'Tools',
      items: ['Git', 'Postman', 'CI cơ bản', 'VS Code / Cursor'],
    },
  ],
  projects: [
    {
      title: 'Portfolio cá nhân',
      description:
        'Trang portfolio static bằng React + Vite, đóng gói Docker multi-stage và serve bằng nginx.',
      stack: ['React', 'TypeScript', 'Docker', 'Nginx'],
      url: 'https://github.com/',
    },
    {
      title: 'API dịch vụ (placeholder)',
      description:
        'REST API mẫu với FastAPI: CRUD, validation, kết nối PostgreSQL và chạy trong Docker Compose.',
      stack: ['FastAPI', 'PostgreSQL', 'Docker'],
      url: 'https://github.com/',
    },
    {
      title: 'Hệ thống quản trị (placeholder)',
      description:
        'Backend Laravel cho admin panel: authentication, phân quyền, API resource và queue job.',
      stack: ['Laravel', 'MySQL', 'Redis'],
      url: 'https://github.com/',
    },
  ],
} as const
