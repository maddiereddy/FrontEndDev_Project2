//Event  class

export class EventItem {
    constructor(
    public id: number,
    public name: string,
    public speaker: string,
    public date: string,
    public startTime: string,
    public endTime: string,
    public address1: string,
    public address2: string,
    public city: string,
    public state: string,
    public zip: string,
    public upvotes: number = 0,
    public downvotes: number = 0,
    public details: string,
    public cancelled: boolean = false){}
}
