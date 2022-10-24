function project(name) {
    let projects = []

    return {
        projects: projects,
        name: name,
        add(name) {projects.push(name)}}
}