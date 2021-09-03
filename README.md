# Omnisense
Application to monitor and manage devices
## Requirements Completed
  1. Top level menus allow access to various modules
    - Manage page activates when accessing Manage link from header, redirects user to Command center as other functions are not yet available
    - `Module not available` page is shown when accessing other header menu items
   
  2. Side menus allow access to functionalities within module
    - Command Manager page is shown when accessing from side menu
    - `Function not available` popup is displayed for other side menu items
    - side menu items for Manage page are hidden when trying to access other modules
  3. Allows the listing of all devices and their status
    - 20 device items are mocked
    - pagination with 10 items each page is added
    - only deactivate device function is added, other items will havec no function
  4. Sorting should be available on “Profile” column.
    - added sorting only to profile column

  ### simplications for deactivate device
    - added validation , date is only required for schedule deactivation
    - reason is always mandatory
    - comment is always optional
    - used POST body instead of query string when deactivating device as we are adding new event record
    - cancel button clears all field and returns user to the table view


    
## Time
  - 4 hrs - getting familiar with ng-alain
  - 3 hrs - 
    setup basic layout 
    removed login from default layout
    created mock for devices
    created table view
    profile sort
    restrict access to unavailable modules and functions
  - 2 hrs -
    created device event drawer
    created mock, service, model and added form controls to device event
    happy path for added events
  - 3 hrs 
    added form validation
    show modal when adding new event
    hide menu when accessing modules that are not available
    