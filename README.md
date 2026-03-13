Real-Time Order & Driver Management System
<br>
<br>
Authentication APIs
POST http://localhost:5000/api/auth/register
POST http://localhost:5000/api/auth/login
GET  http://localhost:5000/api/auth/users

DRIVER APIs
POST http://localhost:5000/api/drivers
GET  http://localhost:5000/api/drivers
PUT  http://localhost:5000/api/drivers/:id
PUT  http://localhost:5000/api/drivers/deactivate/:id
DELETE http://localhost:5000/api/drivers/:id

VEHICLE APIs
POST http://localhost:5000/api/vehicles
GET  http://localhost:5000/api/vehicles
PUT  http://localhost:5000/api/vehicles/deactivate/:id

ORDER APIs
POST http://localhost:5000/api/orders
GET  http://localhost:5000/api/orders
GET  http://localhost:5000/api/orders/history/:id
PUT  http://localhost:5000/api/orders/assign/:id
PUT  http://localhost:5000/api/orders/status/:id

ANALYTICS APIs
GET http://localhost:5000/api/analytics/dashboard
