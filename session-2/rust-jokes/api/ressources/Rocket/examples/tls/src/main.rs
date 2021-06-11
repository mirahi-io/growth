#[macro_use] extern crate rocket;

#[cfg(test)] mod tests;

#[get("/")]
fn hello() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    // See `Rocket.toml` and `Cargo.toml` for TLS configuration.
    rocket::build().mount("/", routes![hello])
}
