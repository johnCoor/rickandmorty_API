const resolveRoutes = (route) => {
    if(route.length <=3) {
        let validRote = route === "/" ? route : "/:id"
        return validRote
    }

    return `/${route}`
}

export default resolveRoutes;