variable "TAG" {
    default = "latest"
}

target "default" {
    matrix = {
        tgt = ["dev", "prod"]
    }
    name       = tgt
    context    = "../.."
    dockerfile = "mfe/tasks/Dockerfile"
    target     = tgt
    tags = ["example/tasks:${TAG}"]
    platforms = ["linux/amd64"]
}
