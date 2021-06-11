use std::collections::HashMap;

use rocket::Request;
use rocket::response::Redirect;
use rocket::serde::Serialize;

use rocket_dyn_templates::{Template, tera::Tera};

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
struct TemplateContext<'r> {
    title: &'r str,
    name: Option<&'r str>,
    items: Vec<&'r str>
}

#[get("/")]
pub fn index() -> Redirect {
    Redirect::to(uri!("/tera", hello(name = "Your Name")))
}

#[get("/hello/<name>")]
pub fn hello(name: &str) -> Template {
    Template::render("tera/index", &TemplateContext {
        title: "Hello",
        name: Some(name),
        items: vec!["One", "Two", "Three"],
    })
}

#[get("/about")]
pub fn about() -> Template {
    let mut map = HashMap::new();
    map.insert("title", "About");
    Template::render("tera/about.html", &map)
}

#[catch(404)]
pub fn not_found(req: &Request<'_>) -> Template {
    let mut map = HashMap::new();
    map.insert("path", req.uri().path().raw());
    Template::render("tera/error/404", &map)
}

pub fn customize(tera: &mut Tera) {
    tera.add_raw_template("tera/about.html", r#"
        {% extends "tera/base" %}

        {% block content %}
            <section id="about">
              <h1>About - Here's another page!</h1>
            </section>
        {% endblock content %}
    "#).expect("valid Tera template");
}
