package main

type User struct {
	Username      string `json:"username"`
	Password      string `json:"password"`
	FirstName     string `json:"firstName"`
	LastName      string `json:"lastName"`
	PhoneNumber   string `json:"phoneNumber"`
	Email         string `json:"email"`
	StreetAddress string `json:"streetAddress"`
	Apt           string `json:"apt"`
	City          string `json:"city"`
	State         string `json:"state"`
	ZipCode       string `json:"zipCode"`
}

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}
