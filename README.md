This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To run under Docker

First download and start Docker Desktop.

In your profile, create the variable `$zuzu_react` pointing to any open port. For instance, if your profile is `~/.zshrc`, put the following in it:
```
export zuzu_react=3000
```

If you have multiple projects and you pick different ports for each, then they can all run at the same time.

The first time you run and any time you change one of the docker files, run:
```
./docker-build.sh
```

Every time you want to run, do this:
```
./docker-start.sh
```
That will give you a command line in the virtual machine that you can run `npm` from.

## Firebase

The data is stored on Google's Firebase.
### Account
Go to https://firebase.google.com and create a google account.

### Creation
Click "create a project". Call it "zuzus-hot-five". Do not use analytics.

Create a web app. Call it "zuzu". Do not use hosting.

Create the file `.env.development`. It should contain:
```
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
```
After creating the app, firebase will show you the values that you should use for those variables.

### Database
From the firebase dashboard, do "create database" and "start in production mode".

Change the rules to:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
Create a collection called "events". It should have the following fields:
* title
* venue
* address
* date
* time
* description
* venue_website
* facebook_url
All of these should be strings.

Create a collection called "gallery". It should have the following fields:
* URL
* alt
All of these should be strings.

### Authentication

On the firebase dashboard, click "authentication" and "get started".
Click "email provider" and enable "email/password".

On `https://console.firebase.google.com/project/zuzus-hot-five/authentication/settings` click "authorized domains" and add "zuzus-hot-five-next.netlify.app" and "zuzushotfive.com"

After setting up the dev environment, go to `http://localhost:3000/susanna` and put in an email and password and click "sign up".

Then in firebase go to the zuzus-hot-five firestore database and click "users". Change the "admin" field to true.

After all the users are created, then remove the "sign up" button.

### Image Storage
From the [main page](https://console.firebase.google.com/project/zuzus-hot-five/overview) click "storage".

Click "get started", "start in production mode" and finish the dialog.

On the dashboard, click "rules" and change to:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
     }
  }
}
```
On the dashboard, click "files" and the folder icon and add a folder called "gallery".

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
