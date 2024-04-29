## Food Delivery application
it consists of 3 folders:<br>
1- frontend : for normal users who need to start orders after signing up or loging in.<br>
2- Admin: for admin who can add food, list food and update the status of orders.<br>
3-Backend: for the logic and functionality of the whole website.<br>

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
<b>as admin you need to Login:</b>
![admin-login](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/d50aed08-8167-4c9f-8b1d-1598d6423226) <br> <br> <br> <br>
<b>After opening the admin page you will find out the list of food available you can remove them and add
new list with your items and they will appear automatically in frontend.</b><br>
![adim-listing-menu-page](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/2d91819b-6eb0-4ec3-b589-3c958e3a6a46) <br>
<b>update orders placed from users status from select menu.</b> <br>
![admin-listing-orders page](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/350a07fa-b2cc-459f-a489-2a1185157591) <br>

<b>as a user you will open the website make an account to start order your favourite food</b> <br>
![user-sign-up](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/554c51c3-280e-432a-9deb-4a8d3e45b272) <br>
<b>or</b> <br>
![user-login](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/d83e9cc9-9f81-4268-9930-2315d0173498) <br>
<b>then browse menu:</b> <br>
![Menu list](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/77afa8df-9bc0-4e07-8fa6-dec89db7be9c) <br> <br> <br> <br>
<b>add item to cart:</b><br>
![cart page](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/223d5abd-3a77-427f-b019-d9bbc83bba5e) <br> <br> <br> <br>
<b>place the order:</b> <br>
![place-order page](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/398b190d-f194-4def-b939-abacc75e06da) <br> <br> <br> <br>
<b>after that the user will have to pay to complete the order , i used stripe payment gateway:</b> <br>
![payment-using stripe](https://github.com/Eng-Esraa-shamaa/food-delivery-website/assets/76951663/1649d276-6fb8-40ec-b98f-22ca043cddcb) <br>

<b>as an admin you will click orders so orders component will retrieve all the orders made by users and their status so the admin
have the access to change the status of the order to out for delivery or delivered or let it as it is (order processing).</b>
As a user can also filter the menu items depending on what items he want to see (deserts, cakes ...)
