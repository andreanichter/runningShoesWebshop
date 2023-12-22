const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const dataRoute = "./orders.json";
const cors = require("cors");
const orderData = require(dataRoute);

app.use(express.json());
app.use(cors());
app.use("/public", express.static(`${__dirname}/../frontend/public`));

//---------------------------------------------------------------------------

//DATA
let shoes = JSON.parse(fs.readFileSync("shoes.json"), "utf8") ?? [];
let orders = JSON.parse(fs.readFileSync("orders.json"), "utf8") ?? [];

//--------------------------------------------------------------------------
//ROUTE HANDLERS

async function getAllShoes(req, res) {
	try {
		res.status(200).json(shoes);
	} catch (error) {
		res.status(500).send("Internal server error");
	}
}

async function getAllShoeOrders(req, res) {
	try {
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).send("Internal server error");
	}
}

async function postNewOrder(req, res) {
	// Extract the request body data, assuming it's in JSON format
	const newOrderData = req.body;

	// Check if orderData.orders is undefined or empty
	if (!orderData || orderData.length === undefined) {
		orderData = [];
	}

	// Calculate the next order ID
	const maxOrderId =
		orderData.length > 0 ? Math.max(...orderData.map((ord) => ord.id)) : 0;

	// Generate a new unique order ID
	const orderId = maxOrderId + 1;

	// Create the new order object with the provided data
	const newOrder = {
		id: orderId,
		brand: newOrderData.items.map((item) => item.brand).join(", "),
		model: newOrderData.items.map((item) => item.model).join(", "),
		quantity: newOrderData.items.map((item) => item.quantity).join(", "),
		size: newOrderData.items.map((item) => item.size).join(", "),
		price: newOrderData.items.map((item) => item.price),
		total: newOrderData.items.reduce(
			(total, item) => total + item.price,
			0
		),
		date: {
			year: new Date().getFullYear(),
			month: new Date().getMonth() + 1, // Months are zero-based
			day: new Date().getDate(),
			hour: new Date().getHours(),
			minute: new Date().getMinutes(),
		},
		customer: newOrderData.customer || {}, // Include customer data from the request
	};
	//console.log(newOrder);
	// Add the new order to the existing orders array
	orderData.push(newOrder);

	// Update the last order ID
	orderData.lastOrderId = orderId;

	// Write the updated data back to the file
	fs.writeFile(
		"orders.json",
		JSON.stringify(orderData, null, 2),
		"utf8",
		(writeErr) => {
			if (writeErr) {
				console.error("Error writing data:", writeErr);
				return res.status(500).json({ error: "Failed to write data" });
			}

			// Return a success response with the newly created order
			res.status(201).json(newOrder);
		}
	);
}

//-----------------------------------------------------------------------
//ENDPOINTS
app.route("/api/shoes").get(getAllShoes);

app.route("/api/orders").get(getAllShoeOrders).post(postNewOrder);

//-----------------------------------------------------------------------
app.get("/", (req, res) => {
	res.redirect(301, "/shoes/list");
});

app.get(["/shoes/list"], (req, res, next) => {
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`));
});

//------------------------------------------------------
//SERVER
const port = 3000;
app.listen(port, (_) => console.log(`http://127.0.0.1:${port}`));
