//Event  class

export class EventItem {
    constructor(
    public id: number,
    public name: string,
    public date: string,
    public startTime: string,
    public endTime: string,
    public address1: string,
    public address2: string,
    public city: string,
    public state: string,
    public zip: number,
    public vote: number = 0,
    public detail: string,
    public cancelled: boolean = false){}
}