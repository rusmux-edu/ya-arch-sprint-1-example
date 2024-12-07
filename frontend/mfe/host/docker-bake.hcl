variable "TAG" {
    default = "latest"
}

target "default" {
    matrix = {
        tgt = ["dev", "prod"]
    }
    name       = tgt
    context    = "../.."
    dockerfile = "mfe/host/Dockerfile"
    target     = tgt
    tags = ["example/host:${TAG}"]
    platforms = ["linux/amd64"]
}
