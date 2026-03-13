Real-Time Order & Driver Management System
<br>
<br>
Authentication APIs
<br>
POST http://localhost:5000/api/auth/register
<br>
POST http://localhost:5000/api/auth/login
<br>
GET  http://localhost:5000/api/auth/users
<br>
<br>
DRIVER APIs
<br>
POST http://localhost:5000/api/drivers
<br>
GET  http://localhost:5000/api/drivers
<br>
PUT  http://localhost:5000/api/drivers/:id
<br>
PUT  http://localhost:5000/api/drivers/deactivate/:id
<br>
DELETE http://localhost:5000/api/drivers/:id
<br>
<br>
VEHICLE APIs
<br>
POST http://localhost:5000/api/vehicles
<br>
GET  http://localhost:5000/api/vehicles
<br>
PUT  http://localhost:5000/api/vehicles/deactivate/:id
<br>
<br>
ORDER APIs
<br>
POST http://localhost:5000/api/orders
<br>
GET  http://localhost:5000/api/orders
<br>
GET  http://localhost:5000/api/orders/history/:id
<br>
PUT  http://localhost:5000/api/orders/assign/:id
<br>
PUT  http://localhost:5000/api/orders/status/:id
<br>
<br>
ANALYTICS APIs
<br>
GET http://localhost:5000/api/analytics/dashboard
