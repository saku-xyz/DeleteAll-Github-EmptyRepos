# Find and Delete Empty GitHub Repositories

This script helps you identify and delete empty repositories from your GitHub account using the GitHub API.

## 📋 Requirements

-   Node.js installed on your system
    
-   A GitHub Personal Access Token (PAT) with `repo` and `delete_repo` permissions
    

## 📦 Setup Instructions

1.  Clone the repository:
    

```
   git clone https://github.com/saku-xyz/Find-Github-EmptyRepos.git
   cd Find-Github-EmptyRepos
```

2.  Install dependencies:
    

```
   npm install
```

3.  Create a `.env` file in the project root manually and add your GitHub username and token:
    

```
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_personal_access_token
```

> **Note:** Ensure your token has `repo` and `delete_repo` permissions. You can generate a new token from [GitHub Settings](https://github.com/settings/tokens).

4.  Ensure the script fetches your GitHub username from the `.env` file:
    

```
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
```

## ▶️ Usage

Run the script with the following command:

```
   node find-empty-repos.js
```

The script will:

1.  Fetch all your repositories.
    
2.  Identify and list empty repositories.
    
3.  Automatically delete the empty repositories.
    

## 📌 Notes

-   Ensure your token has appropriate permissions.
    
-   Deleted repositories cannot be recovered, so use with caution.
    

## 🛠️ Troubleshooting

-   **403 Error (Must have admin rights)**: Ensure your token has `delete_repo` permissions and your account has admin rights to the repository.
    

Feel free to contribute or open issues for improvements!
