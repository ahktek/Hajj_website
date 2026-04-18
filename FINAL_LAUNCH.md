# 🚀 Final Launch Instructions

Follow these steps to deploy your **Al Haramain Hajj** platform to production with a live database and CMS.

## 1. Database Setup (Supabase / Neon)
Vercel does not host databases, so you need a managed PostgreSQL instance.

1.  **Sign up for [Supabase](https://supabase.com/)** (Free).
2.  Create a new project named `Hajj-Website`.
3.  Go to **Project Settings** > **Database** > **Connection String** > **URI**.
4.  Copy the URL. It looks like this:
    `postgresql://postgres:[YOUR-PASSWORD]@db.xxxx.supabase.co:5432/postgres`

## 2. Vercel Deployment
1.  **Push your latest code to GitHub:**
    ```bash
    git add .
    git commit -m "Final build with CMS and Database integration"
    git push origin master
    ```
2.  **Import to Vercel:**
    - Go to [Vercel](https://vercel.com/) and click **Add New** > **Project**.
    - Select your `Hajj_website` repository.
3.  **Configure Environment Variables:**
    - In the "Environment Variables" section, add:
      - **Key:** `DATABASE_URL`
      - **Value:** (Paste your Supabase Connection URI here)
4.  **Deploy!**
    - Vercel will now build and host your site.

## 3. Post-Deployment Sync
Once the site is live on Vercel, you need to sync your database schema to the production DB:
1.  Run this command locally (pointing to your production DB):
    ```bash
    npx prisma db push
    ```
    *Alternatively, you can add this to your `package.json` build script so Vercel does it automatically.*

## 4. Accessing your CMS
Your admin dashboard is located at:
**`https://your-domain.com/admin/dashboard`**

### Security Note:
Currently, the admin area is accessible for your testing. Before public launch, you should add **Auth Protection** (which I can help you with next).

## 5. Summary of Built Features:
- [x] **Premium UI:** Animated Spiritual Design.
- [x] **Lead Capture:** Callback Requests and Pre-Registrations.
- [x] **Micro-CMS:** Admin dashboard to view and manage all pilgrims.
- [x] **Database:** Prisma models ready for PostgreSQL.
- [x] **GitHub Sync:** Code is safe and ready for Vercel.

---

**Need help with the Supabase setup or adding a password to your Admin area? Just ask!**
