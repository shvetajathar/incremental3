#!/bin/bash
if [ -d "/home/coder/project/workspace/dotnetapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/dotnetapp/" ]
    then
        cp -r /home/coder/project/workspace/nunit/test/TestProject /home/coder/project/workspace/;
        cp -r /home/coder/project/workspace/nunit/test/dotnetapp.sln /home/coder/project/workspace/dotnetapp/;
        cd /home/coder/project/workspace/dotnetapp || exit;
        dotnet clean;
        dotnet build && dotnet test -l "console;verbosity=normal";
    else
        echo "Week4_day1_Player_ClassExists FAILED";
        echo "Week4_day2_Team_ClassExists FAILED";
        echo "Week4_Day1_Test_Migrationfolder_Exists FAILED";
        echo "Week4_day3_User_ClassExists FAILED";
        echo "Week4_Day3_RegisterMethod_PlayerController_Exists FAILED";
        echo "Week4_Day3_LoginMethod_PlayerController_Exists FAILED";
        echo "Week4_Day3_GetPlayersMethod_AdminController_Exists FAILED";
        echo "Week4_Day3_GetTeamsMethod_AdminController_Exists FAILED";
        echo "Week5_Day5_PutPlayerMethod_AdminController_Exists FAILED";
        echo "Week5_Day5_DeletePlayerMethod_AdminController_Exists FAILED";
    fi
else
    echo "Week4_day1_Player_ClassExists FAILED";
    echo "Week4_day2_Team_ClassExists FAILED";
    echo "Week4_Day1_Test_Migrationfolder_Exists FAILED";
    echo "Week4_day3_User_ClassExists FAILED";
    echo "Week4_Day3_RegisterMethod_PlayerController_Exists FAILED";
    echo "Week4_Day3_LoginMethod_PlayerController_Exists FAILED";
    echo "Week4_Day3_GetPlayersMethod_AdminController_Exists FAILED";
    echo "Week4_Day3_GetTeamsMethod_AdminController_Exists FAILED";
    echo "Week5_Day5_PutPlayerMethod_AdminController_Exists FAILED";
    echo "Week5_Day5_DeletePlayerMethod_AdminController_Exists FAILED";
fi
    