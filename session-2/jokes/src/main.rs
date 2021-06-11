#![feature(decl_macro)]
#[macro_use] extern crate rocket;

use rocket::request::Form;

#[get("/")]
fn index() -> &'static str {
    "Hello, world! What's up?"
}

#[get("/hello/<name>")]
fn hello(name: String) -> String {
    format!("Hello, {}!", name.as_str())
}

#[derive(FromForm)]
pub struct User {
    pub username: String,
}

#[post("/user", format = "application/json", data = "<user>")]
fn new_user(user: Form<User>) {
    println!("new user created: {:#?}", user.username);
}

fn main() {
    rocket::ignite().mount("/", routes![index, hello, new_user]).launch();
}