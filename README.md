## Food Delivery application
it consists of 3 folders:
1- frontend : for normal users who need to start orders after signing up or loging in.
2- Admin: for admin who can add food, list food and update the status of orders.
3-Backend: for the logic and functionality of the whole website.

## How to use the project:
1- first run the backend folder 
```bash
npm run server
```
it should work in localhost:4000

2- second run admin folder
```bash
npm run dev
```

3- third run frontend folder
```bash
npm run dev
```

then you have to open 2 web browsers : 
<br>
1- http://localhost:5174/ for normal frontend<br>
2- http://localhost:5173/ for admin <br>

now you should be able to use the food delivery website. <br>
for admin login:<br>
use email : admin@admin.com<br>
use password: admin<br>

## Contribution
Esraa shamaa<br>
linkedIn: https://www.linkedin.com/in/esraa-shamaa-766b72207/<br>
Github: https://github.com/Eng-Esraa-shamaa<br>

## Notes about project:
All the frontend made using React.js<br>
the backend made using node.js using express.js<br>
the database using mongodb atlas<br>

## Example of usage scenario:
After opening the admin page you will find out the list of food available you can remove them and add
new list with your items and they will appear automatically in frontend.
as a user you will open the website make an account to start order your favourite food 
after that the use will have to pay to complete the order.
as an admin you will click orders so orders component will retrieve all the orders made by users and their status so the admin
have the access to change the status of the order to out for delivery or delivered or let it as it is (order processing).
As a user can also filter the menu items depending on what items he want to see (deserts, cakes ...)
