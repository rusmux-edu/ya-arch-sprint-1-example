variable "TAG" {
    default = "latest"
}

target "default" {
    name = tgt
    matrix = {
        tgt = ["dev", "prod"]
    }
    target  = tgt
    context = "."
    tags = ["example/tasks:${TAG}"]
    platforms = ["linux/amd64"]
}
