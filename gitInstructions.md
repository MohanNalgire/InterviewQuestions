# How to use this git repository #

## Index ##

|Sr No. | Topic|
| :---: | :--- |
|1      | [To add ssh key to git and GitHub](#to-add-ssh-key-to-git-and-github) |
|2      | [To use git repository](#to-use-git-repository) |

## To add ssh key to git and GitHub ##

----
Steps:
step 1: Paste the text below, substituting in your GitHub email address.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

step 2: Copy the SSH public key to your clipboard.

```bash
clip < ~/.ssh/id_ed25519.pub
```

step 3: Add this ssh key to your GitHub account

```makefile
    3.1. In the upper-right corner of any page, click your profile photo, then click Settings.
    3.2. In the "Access" section of the sidebar, click SSH and GPG keys.  
    3.3. Click New SSH key or Add SSH key.
    3.4. In the "Title" field, add a descriptive label for the new key. For example, f you're using a personal laptop, you might call this key "Personal laptop".
    3.5. Select the type of key, either authentication or signing. For more information about commit signing, see "About commit signature verification."
    3.6. In the "Key" field, paste your public key.
    3.7. Click Add SSH key.
    3.8. If prompted, confirm access to your account on GitHub. For more information, see "Sudo mode."
```

## To use git repository ##

Steps:

step 1: Clone the GitHub repository to your local machine

```bash
git clone https://github.com/MohanNalgire/InterviewQuestions.git
```

step 2: Change directory to InterviewQuestions.

```bash
cd InterviewQuestions
```

step 3: Verify git local repository

```bash
git status
```

step 4: Create a new branch from origin master branch switch to new branch..

```bash
git checkout -b <new_branch_name> <remote_name>/<remote_branch_name>
# Example : git checkout -b developer_msn origin/developer
```


step 5: check your remote details and confirm.

```bash
git remote -v
```

step 6: Pull all changes to local from remote repository.

```bash
git pull --all
```
