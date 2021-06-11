#[macro_use] extern crate rocket;

#[derive(Responder)]
struct Thing1;

#[derive(Responder)]
struct Thing2();

#[derive(Responder)]
enum Bar { } // NO ERROR

#[derive(Responder)]
enum Foo { Bark, }

#[derive(Responder)]
struct Thing4<'a, 'b>(&'a str, &'b str);

#[derive(Responder)]
struct Thing5<T>(T); // NO ERROR

#[derive(Responder)]
struct Thing6<T, E>(T, E); // NO ERROR

#[derive(Responder)]
#[response(content_type = "")]
struct Thing7(());

#[derive(Responder)]
#[response(content_type = "idk")]
struct Thing8(());

#[derive(Responder)]
#[response(content_type = 100)]
struct Thing9(());

#[derive(Responder)]
#[response(status = 8)]
struct Thing10(());

#[derive(Responder)]
#[response(status = "404")]
struct Thing11(());

#[derive(Responder)]
#[response(status = "404", content_type = "html")]
struct Thing12(());

#[derive(Responder)]
#[response(status = 404, content_type = 120)]
struct Thing13(());

#[derive(Responder)]
#[response(bound = 10)]
struct Thing14(());

#[derive(Responder)]
#[response(bound = "T: std::fmt::Display")]
struct Thing15<T>(T);

#[derive(Responder)]
#[response(bound = "T: std::fmt::Display")]
struct Thing16<T>(T);

#[derive(Responder)]
#[response(bound = "ponies are cool")]
struct Thing17<T>(T);

#[derive(Responder)]
#[response(bound = "T: ROCKETS + ARE COOLER")]
struct Thing18<T>(T);

fn main() {}
