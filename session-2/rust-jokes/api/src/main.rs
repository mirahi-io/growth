#![feature(decl_macro)]
#[macro_use] extern crate rocket;

mod models;

use rocket::request::Form;
use rocket::State;
use std::sync::{Arc, Mutex};
use crate::models::{User};

#[derive(Debug)]
struct UserState(Arc<Mutex<Vec<User>>>);

#[get("/hello/<name>")]
fn hello(name: String) -> String {
    format!("Hello, {}!", name.as_str())
}

#[get("/users")]
fn users(state: State<UserState>) -> String {
    format!("All users: {:?}", state.0)
}

#[post("/user", data = "<user_form>")]
fn new_user(user_form: Form<User>, state: State<UserState>) {
    let user = user_form.into_inner();
    let user_state: &UserState = state.inner();
    user_state.0.lock().unwrap().push(user);
}

fn main() {
    rocket::ignite()
        .manage(UserState(Arc::new(Mutex::new(vec![User{ name: String::from("Anthony") }]))))
        .mount("/", routes![hello, users, new_user])
        .launch();
}
