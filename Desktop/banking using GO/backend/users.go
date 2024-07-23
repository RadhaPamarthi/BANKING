package main

type User struct {
	Username string  `json:"username"`
	Password string  `json:"password"`
	Account  Account `json:"account"`
}

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type Account struct {
	AccountNumber string  `json:"accountNumber"`
	Balance       float64 `json:"balance"`
}
