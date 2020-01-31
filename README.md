# React Anime List

## What Is It?
React Anime List is a small CRUD app for keeping track of anime titles. It is currently in development form, meaning that it does not connect to an external API.

## How does it work?
The initial data displayed upon loading is kept in a local JSON file. From there, the user is presented with the opportunity to search for a new title they would like to add to the list. This new information is retrieved from MyAnimeList.com via the Jikan API. When the user confirms that the title retrieved is the one they were looking for, that new information is appended to the original dataset (however this information is lost once the browser is closed).

## CRUD Functionality
Each title object has the ability to be updated, viewed, and deleted. 
