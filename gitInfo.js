/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = 'Git is a version control system which allows individuals and teams to save, track and manage changes of a repository'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'GitHub is a website that allows developers to store, share and track their code. It also makes it much easier to collaborate on projects with other developers and teams'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = 'The git intit command is used to initialize a new GIT repository which creates a new folder on your own computer with all of the necessary files and configurations needed for version controlling'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = 'The git clone command is used to generate a copy of the repository from source control websites like GItHub.com to in return save it on your own computer'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = 'The git status command displays the current status of the files in the local (your computer)repository. This includes files that have been modified, added or deleted but not saved/committed just yet'

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = 'The git add command is used to prepare/STAGE the changes to be committed, so that they can be tracked by git'

let gitAddCode = 'git add .'

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = 'The git commit command is used to save changes to the local folder/repository(on your computer) and record a new version of the project with a message describing the changes made.'

let gitCommitCode = ' git commit -m "initial commit" '

//Ignore - The -m flag is used to provide a message describing the changes that were made. In this case, the message is "initial commit" which is typically used when creating the first version of a new repository. This command will save all the changes that were previously staged using the git add command, and create a new version of the project with the message "initial commit".


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = 'The git push command is used to upload the committed changes from the local repository/folder(on your computer) to a remote repository/folder on a website like GitHub, to make them available for others to access and collaborate on.'