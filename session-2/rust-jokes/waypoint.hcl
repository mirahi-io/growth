
project = "jokes"

app "api" {
  build {
    use "docker" {
      dockerfile = "/Users/anymaniax/Documents/milenko/growth/session-2/rust-jokes/api/Dockerfile.prod"
    }
    registry {
        use "docker" {
          image = "registry.mirahi.cloud/library/jokes"
          tag   = "latest"
          encoded_auth = filebase64("/Users/anymaniax/Documents/milenko/growth/session-2/rust-jokes/dockerAuth.json")
        }
      }
  }


  deploy {

    use "nomad" {
      service_port = 80
      static_environment = {
            "DATABASE_URL": "postgres://root:rootpassword@testpg.mirahi.cloud:30407/jokes?synchronize=true&schema=jokes",
            "SECRET": "afs8^&t8fd*sy5bdap6gy%m!qybywjtmqj7taja#%#9msmxvi9ddcnf"
          }
    }
  }
}