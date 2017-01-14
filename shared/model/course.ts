
export interface Course {
    readonly id: number,
    readonly url: string,   
    description: string,
    iconUrl: string,
    courseListIcon: string,
    seqNo: number
}

export function createCourseFromDbModel( 
    {
        id, 
        url, 
        description, 
        iconUrl, 
        courseListIcon, 
        seqNo
    }: any) : Course {

    return {
        id, 
        url, 
        description, 
        iconUrl, 
        courseListIcon, 
        seqNo
    };
}
