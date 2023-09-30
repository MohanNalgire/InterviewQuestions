# Daily git use instructions

step 1: Pull changes from master branch or your defind branch

```bash
    git pull origin master
    # origin => remote_name
    # master => repository default branch name
```

step 2: Check for conflicts

    2.1 If conflicts

        2.1.1 resolve your conflicts  
        2.1.2 add changes to staging area  

        ```bash
            git add .
        ```

        2.1.3 commit your changes

        ```bash
        git commit -m "your message for commit goes here"
        ```

        2.1.3 push your chnages to github

        ```bash
        git push <origin_name> <branch_name>
        # <origin_name> => youtr current origin name 
        # <branch_name> => your current branch name - here we are considering brnaches are same at local and git server
        ```

    2.2 If no conflicts
        2.2.1 add changes to staging area

        ```bash
            git add .
        ```

        2.2.2 commit your changes

        ```bash
        git commit -m "your message for commit goes here"
        ```

        2.2.3 push your chnages to github

        ```bash
        git push <origin_name> <branch_name>
        # <origin_name> => youtr current origin name 
        # <branch_name> => your current branch name - here we are considering brnaches are same at local and git server
        ```
