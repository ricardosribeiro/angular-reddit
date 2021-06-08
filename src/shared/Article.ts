export class Article {
    votes?: number;
    constructor(public title: string, public link: string, votes?: number) {
        this.votes = votes || 0;
    }

}