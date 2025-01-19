# Networking cafe

## Requirements

### v1.0.0

Profile
- Users have a profile page
- They can see and edit their name and a list of interests 
- The interests are prepopulated, and if they have an interest that doesn't exist in the list, they can create a new one
- Users can insert their availability (for now, only a list of day of the week and morning, lunch, afternoon, evening)

Network
- Users can check out the network page
- If the user has filled in his profile, the network page shows other users that the current user can match with
- If there is no user profile, show a button directing them to the user profile

Misc
- There's a navigation bar that contains both tabs, and a message `Hello, {user name}`

Non-functional requirements: 
- make it fast an performant => cache what you can, useMemo, useCallback, avoid unnecessary renenders, cleanup on unmount
- make it reliable - error handling, test it
- make it secure - validate inputs
