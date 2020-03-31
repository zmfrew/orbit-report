export class Satellite {
    launchDate: string
    name: string
    orbitType: string
    operational: boolean
    type: string

    constructor(launchDate: string, name: string, orbitType: string, operational: boolean, type: string) {
        this.launchDate = launchDate
        this.name = name
        this.orbitType = orbitType
        this.operational = operational
        this.type = type
    }

    shouldShowWarning(): boolean {
        return this.type.toLowerCase() === "space debris"
    }
}
