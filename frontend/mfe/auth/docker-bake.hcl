variable "TAG" {
    default = "latest"
}

target "default" {
    matrix = {
        tgt = ["dev", "prod"]
    }
    name       = tgt
    context    = "../.."
    dockerfile = "mfe/auth/Dockerfile"
    target     = tgt
    tags = ["example/auth:${TAG}"]
    platforms = ["linux/amd64"]
}
