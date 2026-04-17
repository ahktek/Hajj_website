# Al Haramain Hajj - Deployment Guide

This guide outlines how to deploy the Micro CMS + eCommerce MVP to a low-cost VPS using Docker and potentially aaPanel.

## Prerequisites
1. A Linux VPS (Ubuntu 22.04 recommended).
2. Domain name pointed to your VPS IP address.
3. Docker and Docker Compose installed.

## Step 1: Initial Server Setup

Update your server and install Docker if not already installed:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install docker.io docker-compose -y
sudo systemctl enable docker
sudo systemctl start docker
```

## Step 2: Clone the Project
Transfer your code to the server. You can use Git, SCP, or directly deploy via CI/CD.

```bash
git clone <your-repo-url> /opt/al-haramain-hajj
cd /opt/al-haramain-hajj
```

## Step 3: Configure Environment
Create a `.env` file in the root directory.

```bash
cp .env.example .env
# Edit the .env file with your production secrets
nano .env
```

Ensure `DATABASE_URL` matches the one in `docker-compose.yml`.
Example: `DATABASE_URL=postgresql://postgres:postgres123@db:5432/alharamain?schema=public`

## Step 4: Next.js Configuration for Docker
Ensure that `output: 'standalone'` is added in your `next.config.mjs` to reduce the image size.
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

## Step 5: Build and Run
Build the Docker images and start the containers.

```bash
docker-compose up -d --build
```

Verify that the containers are running:
```bash
docker ps
```
Your Next.js app should be running on `http://localhost:3000`.

## Step 6: Database Migrations
Since this is the first run, you need to apply Prisma migrations to the production database.

```bash
# Execute into the app container
docker exec -it al-haramain-hajj-app /bin/sh

# Run migrations
npx prisma migrate deploy

# Exit the container
exit
```

## Step 7: Reverse Proxy & SSL (Nginx or aaPanel)

### Option A: Using aaPanel (Recommended for easy management)
1. Install aaPanel on your VPS.
2. In the App Store, install **Nginx**.
3. Go to **Websites** -> Add site.
4. Enter your domain name.
5. In the site settings, go to **Reverse Proxy** and add a proxy pointing to `http://127.0.0.1:3000`.
6. Go to the **SSL** tab and apply for a free Let's Encrypt certificate.

### Option B: Manual Nginx Setup
```bash
sudo apt install nginx certbot python3-certbot-nginx -y
```

Create a new Nginx config file: `/etc/nginx/sites-available/al-haramain`
```nginx
server {
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and obtain SSL:
```bash
sudo ln -s /etc/nginx/sites-available/al-haramain /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Future Considerations
1. **Media Storage:** Replace placeholder images in `src/components/domain/Hero.tsx` with S3/Cloudinary URLs.
2. **API Integrations:** Inject the real SSLCommerz/bKash API in `src/services/payment.mock.ts` and BD SMS Gateway in `src/services/sms.mock.ts`.
